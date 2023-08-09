import 'whatwg-fetch';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { renderHook, act, waitFor } from '@testing-library/react'
import * as hooks from './usePostMisdemeanour';
const { usePostMisdemeanour } = hooks;

const mockAddNewMisdemeanour = jest.spyOn(hooks, 'addNewMisdemeanour');
mockAddNewMisdemeanour.mockImplementation(() => { });

const server = setupServer(
    rest.get('/url', (_req, res, ctx) => {
        return res(ctx.json({ data: 'data' }))
    })
)

beforeAll(() => server.listen())
afterEach(() => {
    server.resetHandlers();
    jest.clearAllMocks();
})
afterAll(() => server.close())

describe("usePostMisdemeanour custom hook", () => {
    it("should process a successful submission of a valid confession", async () => {
        const mockData = {
            success: true,
            justTalked: false,
            message: 'message'
        }

        server.use(
            rest.post('http://localhost:8080/api/confess', (_req, res, ctx) => {
                return res(ctx.json(mockData))
            })
        )
        const { result } = renderHook(() => usePostMisdemeanour());

        await act(async () => {
            result.current.setPostData({ id: 1, subject: 'sd', reason: 'sdf', details: 'sdfsdf' });
        });

        await waitFor(() => expect(result.current.data).toStrictEqual(mockData))
        await waitFor(() => expect(result.current.isLoading).toBe(false))
        await waitFor(() => expect(result.current.error).toBe(""))
        await waitFor(() => expect(mockAddNewMisdemeanour).toHaveBeenCalledTimes(1))
    });

    it("should process a successful submission of a non-valid confession", async () => {
        const mockData = {
            success: true,
            justTalked: true,
            message: 'message'
        }

        server.use(
            rest.post('http://localhost:8080/api/confess', (_req, res, ctx) => {
                return res(ctx.json(mockData))
            })
        )
        const { result } = renderHook(() => usePostMisdemeanour());

        await act(async () => {
            result.current.setPostData({ id: 1, subject: 'sd', reason: 'sdf', details: 'sdfsdf' });
        });

        await waitFor(() => expect(result.current.data).toStrictEqual(mockData))
        await waitFor(() => expect(result.current.isLoading).toBe(false))
        await waitFor(() => expect(result.current.error).toBe(""))
        await waitFor(() => expect(mockAddNewMisdemeanour).toHaveBeenCalledTimes(0))
    });

    it("should process an unsuccessful submission of a non-valid confession", async () => {
        const mockData = {
            success: false,
            message: 'Invalid Confession!!!',
        }

        server.use(
            rest.post('http://localhost:8080/api/confess', (_req, res, ctx) => {
                return res(
                    ctx.status(500),
                    ctx.json(mockData)
                )
            })
        )
        const { result } = renderHook(() => usePostMisdemeanour());

        await act(async () => {
            result.current.setPostData({ id: 1, subject: 'sd', reason: 'sdf', details: 'sdfsdf' });
        });

        await waitFor(() => expect(result.current.data).toStrictEqual(mockData))
        await waitFor(() => expect(result.current.isLoading).toBe(false))
        await waitFor(() => expect(result.current.error).toBe(mockData.message))
        await waitFor(() => expect(mockAddNewMisdemeanour).toHaveBeenCalledTimes(0))
    });
});