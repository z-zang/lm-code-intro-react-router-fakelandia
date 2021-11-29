# Activity 4 - Extensions & Deployment

There are many, many improvements we could make - even to a small app like this.

Here are some ideas for extensions - feel free to implement your own ideas too!

👉 You may have noticed the 1.5s wait when you call `generateMisdemeanours`. If not, try increasing the sleep(1500) in `generateMisdemeanours` until it becomes annoying when you reload. Can you show a nice "loading" message while the fake API is loading?

(Hint: One way to do this could be to add an `isLoading` boolean to state, and using this to conditionally display a loading icon, for example.)

👉 The home page could be more exciting. Maybe you could add some statistics, like "total misdemeanours" or "number of confessions today"?

👉 The Confessions page allows users to add details of their confessions, but that data isn't currently being used anywhere. Maybe you could show it on the misdemeanours page?

👉 How about showing self-confessed misdemeanours in a different colour on the misdemeanours page?

## Deployment

It would be really cool to see the full site live on the internet. Github offer free hosting for simple sites like this via a service called `Github Pages`.

There's an `npm` package called `gh-pages` which makes this super simple:

👉 `npm install gh-pages --save-dev`

👉 Add a `homepage` property at the top of your `package.json`, so it looks like this:

```JavaScript
{
  "name": "your-react-app-name",
  "version": "0.1.0",
  "homepage": "http://{username}.github.io/{repo-name}"
  // where {username} is your GitHub username, and {repo-name} is the name of your GitHub repository for this app
    // ... rest of package.json follows here...

```

👉 Alter the scripts in package.json by adding a predeploy step and changing the deploy step to push your project to github pages

```JavaScript
// ... package.json scripts section...
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

👉 `npm run deploy` should now push your app live to GitHub Pages! Check your repository settings for the URL.

## Hooray!

You've done it! You've modernised the extremely unusual justice system of Fakelandia, and hopefully had some fun and got to experiment a little in the process.

Have a well-deserved rest and look forward to using all these skills to make some extremely cool apps!