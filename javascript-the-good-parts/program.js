const var1 = "hello, ",
    var2 = "world!!!";

document.writeln(var1 + var2);

const object = {
    id: "1",
    first_name: "david",
    "second-name": "crespo",
    city: "London",
};

document.writeln(JSON.stringify(object));
document.writeln(JSON.stringify(object.id));
document.writeln(JSON.stringify(object.first_name));
document.writeln(JSON.stringify(object["second-name"]));
document.writeln(JSON.stringify(object.city));