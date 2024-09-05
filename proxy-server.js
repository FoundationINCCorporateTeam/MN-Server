// proxy-server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Proxy middleware
app.use('/proxy', createProxyMiddleware({
  target: '', // Will be set dynamically
  changeOrigin: true,
  pathRewrite: {
    '^/proxy': '', // Remove /proxy from the URL path
  },
  router: (req) => {
    // Extract target URL from query parameter
    const target = req.query.url;
    return target;
  }
}));

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
