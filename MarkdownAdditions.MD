# Additions to Markdown

Liquid adds an array of new features to Markdown.

## Comments
Comments are supported in Liquid. Comments are ignored by Liquid and are not rendered.

*Example*
```lmd
|#| This is a comment

|#|{
This is a multiline comment
}|#|
```

## Components
Components are used to add interactivity to your pages. To denote a component, use the following syntax:

```lmd
@component(args)
|#| Single-line component, doesn't need a closing tag

::component(args)
    Interior of the component
::/component
|#| Multi-line component, needs a closing tag

Component chaining is supported:
::component1(args)
    *styling*
    ::component2(args)
        **Bolded stuff!**
    ::/component2
::/component1

By default Liquid removes line breaks and indentation from the component. This can be changed by using the pre tag:
::Code('js') pre
function(a) {
    return a + 1;
};
::/Code
```

## Templates
Templates are used to simplify the creation of static resources. To use a template, denote it with the following syntax:

```lmd
%template(args)
```