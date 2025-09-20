console.log("Run 'yandex-gpt-disabler'")
var elements = document.querySelectorAll("[data-fast-name=\"neuro_answer\"]")

elements.forEach(function(node, index) {
    console.log("Detected neuro answer")
    node.remove()
    console.log("Deleted neuro answer")
});
