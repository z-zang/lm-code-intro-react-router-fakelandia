# Activity 3 - Confess (or Just Say Hi)

## Confession Page

Here's the design for this page:

![Confess To Us](./images/confess.png 'Sketched confession page')

Well, that's pretty surprising.

## Form Elements

It looks like they want a form with three elements.

-   A subject line for the confession.

-   A dropdown for the reason for the confession. This could be either a type of misdemeanour, or "I just want to talk"

-   A text box for details

## Form Behaviour

**When the form is filled in, THEN the confess button becomes enabled.**

What does "filled in" mean, exactly? It's up to you! Perhaps the subject line is required, and the details must be a certain length, and a dropdown option must be selected? Or maybe you think other requirements make more sense - choose some sensible form states that will **enable** or **disable** the Confess button!

**When Confess is pressed: IF they are confessing to a crime THEN it should be added to the list of crimes in the current application state. However, IF they just want to talk, THEN you can log their request in the console.**

👉 Try to keep your commits for this activity small and isolated - each of these bullet points is a good candidate for its own commit... or even multiple small commits per bullet point!

👉 Build a form that obeys the above rules, with your own interpretation of what it means for the form to be correctly filled in.

👉 This might be a good candidate for some testing. (If you haven't been testing all your components already... you have, right?!) Add a `test.tsx` file to check your button is enabled/disabled correctly given the right props to the form component.

👉 Check you can submit your own crimes that get added to the list in state. It's starting to feel like a real app! (If a weird one.)

👉 Hold on! Have you been writing quality, valid, accessible HTML? Maybe now is a good time to run your generated HTML through a validator and see!

## The Next Level

If you're feeling up to it, [activity 4](./activity_4.md) has some suggestions for taking your app to new heights - including deploying it live on the internet! 🤩
