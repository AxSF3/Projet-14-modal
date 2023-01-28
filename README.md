## A small but functional retro Apple-inspired modal

![logo](./public/modal.png)

### Install

Install using `npm install retro-apple-inspired-react-modal`

### Usage

In a React app, use the Modal components:
`import { RetroAppleInspiredModal } from 'retro-apple-inspired-react-modal'`

### Modal props

| Name         | Description                                                                |
| ------------ | -------------------------------------------------------------------------- |
| onClick      | function to include in a button to open or close the modal                 |
| openModal    | a boolean value to initialize the modal to a closed and not apparent state |
| setOpenModal | to toggle the state and open/close the modal                               |
| customText   | a string containing a text                                                 |
| customIcone  | a string containing an emoji or HTML CODE SYMBOL                           |

### Make it as a component !

- in your component folder, create a file for your modal that you will import later as it should be.

- then, at the top of your component page

`import React, { useState } from "react";`

`import { RetroAppleInspiredModal } from "retro-apple-inspired-react-modal";`

- then, set the props :

```

const [openModal, setOpenModal] = useState(false);

const handleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenModal((toggle) => !toggle);
  };

const customText =
    "This is a standard alert box. The text would be placed here. This is where more text appears";

const customIcone = <p>🛎️</p>;
```

- then insert in your function the **RetroAppleInspiredModal** and export

```
<RetroAppleInspiredModal
    openModal={openModal}
    setOpenModal={setOpenModal}
    customText={customText}
    customIcone={customIcone}
        />
```

- don't forget to insert `onClick={handleModal}` in a button for exemple

<Button>Submit</Button>

##  some Apple Design specifications

Alert boxes appear when the system software or an application needs to communicate information to the user. Alert boxes provide messages about error conditions and warn users about potentially hazardous situations or actions
**— Apple HI Guidelines, p. 176**

Like modal dialogs, alert boxes also have a double-outline frame. The empty square is where you'd place a vintage icon.

## Contributing, Credits, etc.

**Thanks** for checking this project out! This modal was made in good fun and was largely inspired by [98.css](https://github.com/jdan/98.css). The [Chicago 12pt](http://www.suppertime.co.uk/blogmywiki/2017/04/chicago/)

**Thanks** to [Marcos](https://github.com/MarcosMene) for this super devops guide :-) [HowtoPublishNPMpackage](https://levelup.gitconnected.com/publish-react-components-as-an-npm-package-7a671a2fb7f)
