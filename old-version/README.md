# ActiveElements

# Instalation
```bash
git clone  https://github.com/JulesG10/ActiveElements.git
```

## Usage
```javascript
document.addEventListener("DOMContentLoaded", () => {
  ActiveToDocument([
    Active({
        tag: "div",
        id: null,
        className: "topBar",
        html: [
            Active({
                tag:"p",
                className:"topBar-title",
                text:"Title",
                css:[
                    {position:"absolute"},
                    {top:"50%"},
                    {transform:"translateY(-50%)"},
                    {left:"32px"},
                ],
                stylesheet:"p{margin:0}"
            })
        ],
        attributes: [],
        event: [],
        css: [
            {position:"fixed"},
            {top:0},
            {left:0},
            {width:"100%"},
            {height:"54px"},
            {backgroundColor:"#ccc"}
        ],
        stylesheet: null,
        text: null,
      }),
  ]);
});

```
## Contributing

- live element with variables
- add usefull attribute
- 

## License
[MIT](https://choosealicense.com/licenses/mit/)
