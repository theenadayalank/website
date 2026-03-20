---
path: "location-type-propery-in-ember"
title: "What locationType property does in EmberJS application?"
description: "Understanding locationType in Ember config for SPA deployment."
date: "2018-05-24"
tags: ['Ember']
---

The question **Why do we have locationType property inside config/environment.js in EmberJS application?** raised in my mind when I started to host my personal website in [Ember](https://www.emberjs.com) and used [Netlify](https://www.netlify.com/) for deployment.

When I entered [www.theenadayalan.me/blog](https://www.theenadayalan.me/blog) in the URL box, the browser shows that the page was not found🛑.

While digging deeper into that problem I came to realize the usage of the **locationType** property🙇.

Let's see what it did to my personal website🤔.

As the docs [says](https://guides.emberjs.com/release/configuring-ember/specifying-url-type/), locationType property supports four options📚 

  **history** - this uses HTML5 history API. <br>
  **auto** (default) - this will use history if the browser supports [history API](https://developer.mozilla.org/en-US/docs/Web/API/History) otherwise it will be hash. <br>
  **hash** - anchor based URL. <br>
  **none** - this won't update the URL when you navigate to another route.


When you create a new Ember project, the default value for locationType would be auto, which means this will use history, if supported by the user's browser ( Most of the modern browser's will support this history API. You can check it out [here](https://caniuse.com/#feat=history) or [here](https://developer.mozilla.org/en-US/docs/Web/API/History#Browser_compatibility) ).

#### Gotchas : 💡

When the locationType is set to history or auto, your server will serve index.html for all the URLs configured in your application.

That is because, if you enter [www.theenadayalan.me/blog](https://www.theenadayalan.me/blog), the web server will search for the file **/blog.html** or **/blog/index.html** which doesn't exist in single page applications. It will throw 'Page Not Found' error for URL's other than your root domain.

In Development, the dev-server is managed by Ember-cli which will do this by default. Meanwhile, in production, the web server is handled by our vendor (if we host using a service ). It doesn't know whether your app is a single page application or traditional multi-page application.

( For normal in-app transitions, Internal ember router will handle this by suppressing the network triggers.)

#### So what can be done? : 🤔

Change locationType value to hash (which will append # in the URL), so you don't need any other configurations.

(or)

Manually configure a regex to match your application's URLs to re-serve index.html. (The URL will look clean and easily understandable) ​

>Note: For Netlify, I just ​​followed this [doc](https://www.netlify.com/docs/redirects/#history-pushstate-and-single-page-apps) which guided me to reserve the index.html for all network calls.🙏

Since this is my first blog post, it might look a little hazy. I apologize for the inconvenience.
