
window.onload = (event) => {
    setTimeout(function () {
        const s0000_company_brands_wrapper_id = document.getElementById("s0000_company_brands_wrapper_id");
        const s0000_company_logo = elementMaker("div", ["s0000_company_logo"]);
        s0000_company_brands_wrapper_id.appendChild(s0000_company_logo);
        const s0000_thumb_img = elementMaker("div", ["s0000_thumb_img"]);
        s0000_company_logo.appendChild(s0000_thumb_img);
        const s0000_company_logo_img = elementMaker("img", ["s0000_company_logo"]);
        s0000_company_logo_img.style.width = `100%`;
        s0000_company_logo_img.style.borderRadius = `10px`;
        setAttributes(s0000_company_logo_img, { "src": `https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/a39b93122419745.60d9b859cc3ff.jpg` });
        s0000_thumb_img.appendChild(s0000_company_logo_img);
        function elementMaker(name, className, id) {
            try {
                let element = document.createElement(name);
                className && (element.className = className.join(" "));
                id && (element.id = id);
                return element;
            } catch (err) {
                console.log(err.message);
            };
        };

        function setAttributes(elementName, allAttributes) {
            for (let key in allAttributes) {
                elementName.setAttribute(key, allAttributes[key]);
            };
        };
    }, 1350);
};