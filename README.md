Step-1 : Frist create a folder `express-proj-1`
step-2 : open it in vs code
step-3 : run `npm init`
step-4 : run `npm install express`
step-5 : run `git init`
step-6 : run `git checkout -b master`
step-7 : run `git add .`
step-7 : run `git commit -m "First Commit"`
step-7 : run `git remote add origin https://github.com/sumantind/express-proj-1.git`
step-8 : run `git push -u origin master`
step-9 : Create a new file `index.js` and create express server in this file
step-10:  run `node index.js`
step-11: create another route in `index.js` for about page
step-12: And again run `node index.js` To avoid to run again and again `node index.js` install nodemon by `npm install nodemon` and if you run `npm install -g nodemon` nodemon will installed globally in your system path

note-1
----------------
If you want to use `import` instead of `require()` that means `import` is the property of ECMAScript and `require()` is the property of plain/simple Javascript, then you have to change in package.json from `"type": "commonjs"` to `"type": "module"`
To use ECMAScript in Express:
Add `"type": "module" in package.json`
Replace `require → import`
Replace `module.exports → export default`
Handle `__dirname` manually
==> In index_old.js old or plain javascript method has been used And IN index.js uses ECMAScript rule