# ActiveElements FrameWork

# Instalation
```bash
git clone  https://github.com/JulesG10/Active-FrameWork.git
```

## Usage

> Change the config file

Go  [includes/config/config.active.json](https://github.com/JulesG10/Active-FrameWork/blob/master/includes/config/config.active.json) and change has you want for genarate your page

```json
[
    {
        "tag": "div",
        "id": null,
        "className": "test",
        "html": [
            {
                "tag":"div",
                "html":[
                    {
                        "tag":"div",
                        "html":[
                            {
                                "tag":"div"
                            }
                        ]
                    }
                ]
            }
        ],
        "shadow": [],
        "attributes": [],
        "event": [],
        "css": [],
        "stylesheet": null,
        "text": null
    },
    {
        "tag": null,
        "id": null,
        "className": null,
        "html": [],
        "shadow": [],
        "attributes": [],
        "event": [],
        "css": [],
        "stylesheet": null,
        "text": null
    }

]
```
> Manual config file

go  file example/ex04.html

> Init active

```html
<script defer type="module">
        import { _ } from "./app.active.js";

        _.init(false,false)
        .then((_) => {

            console.log(_)

        })
        .catch(err=>{throw err})
 </script>
```
> or Init only with script tag
```html
<script type="module" defer src="./auto.active.js"></script>
```

## Contributing

- add a bundler as webpack for production mode
- add more active components [here](https://github.com/JulesG10/Active-FrameWork/blob/master/src/components/main.active.js)
- add more _$ function [here](https://github.com/JulesG10/Active-FrameWork/blob/master/src/class/fast.active.js)
- make obersever better [here](https://github.com/JulesG10/Active-FrameWork/blob/master/src/class/observer.active.js)
- make optionnal constante for page configuration [here](https://github.com/JulesG10/Active-FrameWork/blob/master/includes/constant/constant.active.js)

## License
[MIT](https://github.com/JulesG10/Active-FrameWork/blob/master/LICENCE.md)
