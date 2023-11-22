1. What is Emmet?

    Ans-: Emmet is a web development toolkit that significantly enhances HTML and CSS workflow. It allows developers to write HTML and CSS code using abbreviations and then expand those abbreviations into well-formed code snippets. Emmet is supported in various text editors and integrated development environments (IDEs), including Visual Studio Code, Sublime Text, Atom, and more.

2. Difference between Library and Framework?

    Ans-: Library- A library is a collection of pre-written functions and modules that developers can use to perform specific tasks. It is designed to be flexible, allowing developers to choose which components to use and integrate into their applications while maintaining control over the program's flow. 
    eg-: You can use react where you want in your app like in a specific part like in navbar, in header like that.

    FrameWork:A framework is a more comprehensive tool that not only provides pre-written code but also establishes a specific structure or architecture for building applications. It often follows the principle of Inversion of Control, where the framework dictates the flow of the program.
    A framework is like a set of blueprints for building a house. It not only provides tools (code) but also dictates how you should organize your project. You follow the framework's guidelines, and it takes care of certain aspects, calling your code when needed.     

3.What is CDN and Why do We use it ?

    Ans:- A Content Delivery Network (CDN) is a distributed network of servers strategically located around the world to efficiently deliver web content, such as images, scripts, stylesheets, and other assets, to users based on their geographical location. CDNs work by caching and storing copies of these assets on multiple servers, reducing the physical distance between the user and the server and thus improving the overall performance and speed of content delivery.

4.Why is React Known as React ?

    Ans:- React, the JavaScript library for building user interfaces, was developed by Jordan Walke, a software engineer at Facebook. React was first deployed on Facebook's newsfeed in 2011 and later released as an open-source project.

    The name "React" comes from the library's core concept: the ability to declaratively describe how your UI should react to changes in your application's state. In React, you build user interfaces by creating components, and these components can efficiently update and render just the right components when the data changes.

    The name "React" reflects the library's main philosophy of reacting to state changes and efficiently updating the user interface. It emphasizes a reactive and declarative approach to building UIs, where you describe the desired outcome based on the current state, and React takes care of efficiently updating the DOM to match that state.

    In summary, React is named for its core principle of "reacting" to changes in data or state and providing a declarative way to describe the UI based on the current application state.

5.What is Cross-origin in the Script tag?

    Ans:- Cross-origin, in the context of web development, refers to the situation where a web page requests a resource (such as a script, style sheet, or image) from a different domain than the one that served the original web page. This is considered a cross-origin request.
    In web security, there are rules in place to prevent certain types of cross-origin requests for security reasons. This is known as the Same-Origin Policy. In the case of scripts loaded from a different origin, the server should include the appropriate Cross-Origin Resource Sharing (CORS) headers to explicitly allow the script to be loaded and executed by the browser.

    eg-<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js" ></script>

6.What is the Difference between React and React Dom ?

    Ans:- React:-  React is the core library for building user interfaces. It provides the foundational elements for creating components, managing state, and handling the rendering of the UI.
    Usage: You use React when defining your components, managing their state, and describing how the UI should look based on the application's state. It includes essential functions like React.Component, setState(), and lifecycle methods.

    ReactDOM: ReactDOM, on the other hand, is a library specifically designed for interacting with the DOM (Document Object Model). It complements React by providing methods for rendering React components to the DOM.
    Usage: ReactDOM is used when you want to take your React components and render them into the actual HTML DOM. Functions like ReactDOM.render() are used to mount React components into specific DOM elements.

7.What is difference between react.development.js and react.production.js files via CDN?

    Ans:-
react.development.js:

    Purpose: This file is intended for development environments. It includes additional warnings, error messages, and debugging information to aid developers in identifying and fixing issues during development.
    Performance: It may be larger in file size due to the inclusion of development tools, and its code is typically not minified or optimized for production performance.
    Example CDN Link: https://unpkg.com/react@18/umd/react.development.js

react.production.js:

    Purpose: This file is optimized for production environments. It excludes unnecessary development tools, warnings, and debugging information to reduce file size and improve performance in a production setting.
    Performance: It is often smaller in file size compared to the development version, and the code is usually minified and optimized for better runtime performance.
    Example CDN Link: https://unpkg.com/react@18/umd/react.production.min.js

8.What is async and defer?

    Ans-:-
async:

    Purpose: The async attribute is used to indicate that the script should be executed asynchronously, meaning it will not block the parsing of the HTML document.
    Execution: The script will be fetched asynchronously, and while it's being downloaded, the HTML parsing and rendering continue. The script will execute as soon as it's available, possibly before the entire document is parsed.
    Use Case: Suitable for scripts that don't depend on the order of execution or that can run independently.

    eg-<script async src="example.js"></script>

defer:

    Purpose: The defer attribute is used to indicate that the script should be executed after the HTML document has been fully parsed.
    Execution: The script is downloaded in the background while the HTML document is being parsed. The script will execute in the order in which it appears in the document, after the HTML parsing is complete.
    Use Case: Useful when the script relies on the DOM structure and needs to be executed in a specific order.

    eg-<script defer src="example.js"></script>

In summary, async allows the script to be executed asynchronously, potentially before the HTML parsing is complete, while defer ensures that the script is executed after the HTML parsing, maintaining order of execution if there are multiple scripts.