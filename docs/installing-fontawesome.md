1. Add SVG Core
First you'll need to use npm or yarn to install the core package which includes all the utilities to make the icons work:

>> npm i --save @fortawesome/fontawesome-svg-core

2. Add Icon Packages
Next, you'll install the icons you want to use -- you can choose Free or Pro icons, and select any of our styles.

 Free
For Free icons, you can add any of these styles:

# Free icons styles
>> npm i --save @fortawesome/free-solid-svg-icons
>> npm i --save @fortawesome/free-regular-svg-icons
>> npm i --save @fortawesome/free-brands-svg-icons

3. Add the React Component
And lastly, install the Font Awesome React component:

>> npm i --save @fortawesome/react-fontawesome@latest

4. Dynamic Icon Importing
Dynamic Icon Importing eliminates the need to declare individual icons, saving you time adding icons and tracking down unused icons. This work is based on javascripter's babel macro plugin(opens new window)

 Install the Babel Macros
First, you'll install the babel macros using npm or yarn:

>> npm install babel-plugin-macros


5. Create your own babel.config.js file

and add the code

module.exports = function (api) {
  return {
    plugins: ['macros'],
  }
}


6. Then, create a babel-plugin-macros.config.js and add the fontawesome-svg-core settings. You can set the license to either free or pro depending on the icons you are planning to use. (Learn more about setting babel macros (opens new window))

module.exports = {
  'fontawesome-svg-core': {
    'license': 'free'
  }
}
