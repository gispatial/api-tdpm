# tdmp-merchants
 TDMP-MERCHANTS-FRONTEND-VUE-WITH-API
 <p>
 </p>
 <img src="https://github.com/gispatial/tripcarte-asia/blob/master/public/tdpm-home.png" width="100%">
 
## API-TDPM
<table data-v-7b6b9330="">
<thead data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<th data-v-7b6b9330="">Name</th>
<th data-v-7b6b9330="">Type</th>
<th data-v-7b6b9330="">Parameters</th>
<th data-v-7b6b9330="">Description</th>
<th data-v-7b6b9330="">default</th>
</tr>
</thead>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">disableCustomizer</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Toggle display of theme customizer</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">disableThemeTour</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Enable/Disable app tour in Vuexy Admin</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">footerType</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">static, sticky or hidden</td>
<td data-v-7b6b9330="">Change how footer is displayed</td>
<td data-v-7b6b9330="">static</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">hideScrollToTop</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Toggle display of scroll to top button</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">mainLayoutType</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">horizontal/ vertical</td>
<td data-v-7b6b9330="">Layout Type</td>
<td data-v-7b6b9330="">vertical</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">navbarColor</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">Hex, rgb, rgba or valid HTML Color</td>
<td data-v-7b6b9330="">Change color of navbar using this property</td>
<td data-v-7b6b9330="">&nbsp;</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">navbarType</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">floating, static, sticky or hidden</td>
<td data-v-7b6b9330="">Change how navbar is displayed</td>
<td data-v-7b6b9330="">floating</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">routerTransition</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">zoom-fade, slide-fade, fade-bottom, fade, zoom-out, none</td>
<td data-v-7b6b9330="">This property is used to change the router animation.</td>
<td data-v-7b6b9330="">zoom-fade</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">sidebarCollapsed</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Create collapsed sidebar by setting this property to true.</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">theme</td>
<td data-v-7b6b9330="">String</td>
<td data-v-7b6b9330="">light, dark, semi-dark</td>
<td data-v-7b6b9330="">Set between light theme, dark theme &amp; semi-dark theme.</td>
<td data-v-7b6b9330="">light</td>
</tr>
</tbody>
<tbody data-v-7b6b9330="">
<tr data-v-7b6b9330="">
<td width="120px" data-v-7b6b9330="">rtl</td>
<td data-v-7b6b9330="">Boolean</td>
<td data-v-7b6b9330="">true, false</td>
<td data-v-7b6b9330="">Enable/Disable RTL</td>
<td data-v-7b6b9330="">false</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
 
# Project setup

$ npm install or $ yarn

Compiles and hot-reloads for development:

- npm run serve
- yarn serve 

  Note that the development build is not optimized.
  To create a production build, run yarn build.

# Steps to build it

## Prerequisites

You will need to have Node.js or Yarn installed in your machine. 
[[NodeJs](https://nodejs.org/en)] [[YarnPkg](https://yarnpkg.com/)]


## Steps

- `npm install` or 'yarn install' to install existing dependencies:

```
$ npm install or $ yarn
```

- Create Auth0 `server` api model folder/ dir:

### mkdir ./server

```{
  "domain": "https://dev-tripcarte-asia.us.auth0.com/api/v2/",
  "clientId": "5ee225700bf777001acb0cf4"
}
```
- Execute cli to deploy as production or development:

```
npm run serve or yarn serve

- App running at:
- Local:   http://localhost:8080/ 
- Network: http://192.168.0.114:8080/
```

## Third-Party Plugins
Vuexy Admin comes with useful third party plug-ins to help you building your app quickly.

### #agGrid Table
Description: THE best javascript grid in the world

Demo: Visit

Docs: Documentation


# About Tripcarte.Asia Dashboard Portal Project

At Netquest Solutions Sdn Bhd, our engineers constantly use latest framework, technologies and programming language. Keeping up to date with latest framework not only ensures rapid development time, but updated framework technologies are more protected from malwares, security threats and operating system incompatibility. For more info, please visit: https://netquestsolutions.com/

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="http://tripcarte.asia/" target="_blank">Tripcarte.Asia</a>.