//import { connect } from 'cloudflare:sockets';
//import fetch from './../utils/request.js';

function nav() {
  return `<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
          <a class="nav-link" href="/test">Test</a>
        </div>
      </div>
    </div>
  </nav>`;
}

function page({ body, title }) {
  return `
    <html>
      <head>
        <title>${title}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
        <link rel="stylesheet" href="/path/to/styles/default.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/dark.min.css">
        <script type="module">
        import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/es/highlight.min.js';
        hljs.highlightAll();
        </script>
      </head>
      <body>
        ${nav()}
        <div class="container">${body}</div>
      </body>
    </html>
  `;
}

async function home({ url }) {
  return page({
    body: `<div class="row">
      <div class="col-12 mt-3 mb-3">
        <h1 class="mb-5 mt-4">Sample Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>`,
    title: 'Test Page'
  });
}

async function test({ url }) {
  return page({
    body: `<div class="row">
      <div class="col-12 mt-3 mb-3">
        <h1 class="mb-5 mt-4">Test Page 2</h1>
        <p>Test page 2</p>
        <script type="module" src="public/main.js"></script>
      </div>
    </div>`,
    title: 'Test Page'
  });
}

async function error({ url }) {
  return page({
    body: `<div class="row">
      <div class="col-12 mt-3 mb-3">
        <h1 class="mb-5 mt-4">Error</h1>
        <p>Page not found:</p>
        <pre><code>${url.pathname}</code></pre>
      </div>
    </div>`,
    title: 'Error'
  });
}

export default {
  home,
  test,
  error
};