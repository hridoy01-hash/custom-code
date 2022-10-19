
window.onload = (event) => {
    setTimeout(function () {

        const top_area_main_wrapper = document.getElementById("s0000_header_meta_section_id");
        const subMenuList_wrapper = elementMaker("div");
        const giftCart = elementMaker("li");
        const howToORder = elementMaker("li");
        const Faqs = elementMaker("li");
        giftCart.style.listStyle = `none`;
        giftCart.style.color = `white`;
        giftCart.style.fontSize = `12px`;
        giftCart.style.cursor = `pointer`;
        giftCart.textContent = `GIFT CART`;

        howToORder.style.listStyle = `none`;
        howToORder.style.color = `white`;
        howToORder.style.fontSize = `12px`;
        howToORder.style.cursor = `pointer`;
        howToORder.textContent = `HOW TO ORDER`;

        Faqs.style.listStyle = `none`;
        Faqs.style.color = `white`;
        Faqs.style.fontSize = `12px`;
        Faqs.style.cursor = `pointer`;
        Faqs.textContent = `FAQS`;


        subMenuList_wrapper.style.display = `flex`;
        subMenuList_wrapper.style.width = `40%`;
        subMenuList_wrapper.style.gap = `12px`;
        subMenuList_wrapper.style.alignItems = `center`;
        subMenuList_wrapper.appendChild(giftCart);
        subMenuList_wrapper.appendChild(howToORder);
        subMenuList_wrapper.appendChild(Faqs);
        top_area_main_wrapper.appendChild(subMenuList_wrapper);



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