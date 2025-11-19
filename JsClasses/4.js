class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        let html = "";

        this.fields.forEach(f => {
            html += `<label>${f.label}</label>
                     <input type="${f.type}" id="${f.label.toLowerCase()}"><br><br>`;
        });
        container.innerHTML = html;
    }

    getFormData() {
        const data = {};
        this.fields.forEach(f => {
            const key = f.label.toLowerCase();
            data[key] = document.getElementById(key).value;
        });
        return data;
    }
}

const form = new FormBuilder([
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
]);

form.render("formContainer");

document.getElementById("submitBtn").onclick = () => {
    document.getElementById("output").textContent =
        JSON.stringify(form.getFormData(), null, 2);
};
