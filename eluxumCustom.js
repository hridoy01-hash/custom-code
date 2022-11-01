
window.onload = (event) => {
    setTimeout(function () {
        const s0000_footer_row_three_col_two = document.querySelector(".s0000_footer_row_three_col_two");
        const payWithBanner = elementMaker("img");
        setAttributes(payWithBanner, { "src": `https://i.ibb.co/fkP1VpD/SSLCOMMERZ-Pay-With-logo-All-Size-Aug-21-02.png` });
        payWithBanner.style.width = `100%`;
        payWithBanner.style.height = `85px`;
        payWithBanner.style.display = `block`;
        s0000_footer_row_three_col_two.appendChild(payWithBanner);

        // check out box 

        window.addEventListener("click", function () {
            const checkoutLocation = window.location.href;
            const checkOutTrue = checkoutLocation.includes("/checkout");

            if (checkOutTrue) {
                setTimeout(function (e) {
                    const soppiya_checkout_btn_wrapper = document.getElementById("soppiya_checkout_btn_wrapper");
                    const checkBoxDiv = elementMaker("div", ["checkbox_container"]);
                    const Custom_checkbox_main_wrapper = elementMaker("div", ["Custom_checkbox_main_wrapper"]);
                    const checkbox_wrapper = elementMaker("div", ["checkbox_wrapper"]);
                    Custom_checkbox_main_wrapper.appendChild(checkbox_wrapper);
                    let checkBox_id = elementMaker("input", ["checkBox_id"], "checkBoxClick_id");
                    checkBox_id.setAttribute("type", "checkbox");
                    checkbox_wrapper.appendChild(checkBox_id);

                    const text_wrapper = elementMaker("div", ["text_wrapper"]);
                    text_wrapper.innerHTML = `
                    <p class="acceptxText">you are accept our <span><a href="https://eluxumbd.com/page/terms">Term condition</a></span> and <span><a href="https://eluxumbd.com/page/1666849095642">Refund Policy</a></span> </p>
                    `;
                    Custom_checkbox_main_wrapper.appendChild(text_wrapper);
                    checkBoxDiv.appendChild(Custom_checkbox_main_wrapper);


                    let numb = document.getElementById("soppiya_checkout_btn_wrapper").childNodes.length;
                    if (numb == 1) {
                        soppiya_checkout_btn_wrapper.prepend(checkBoxDiv);
                    }



                    checkBox_id.addEventListener("click", function () {

                        if (document.getElementById("checkBoxClick_id").checked) {
                            const soppiya_checkout_btn = document.getElementById("soppiya_checkout_btn");
                            soppiya_checkout_btn.setAttribute("disabled", false);
                            soppiya_checkout_btn.style.cursor = `pointer`;
                            soppiya_checkout_btn.style.color = `rgba(255,255,255,100%)`;
                        }
                        else {
                            const soppiya_checkout_btn = document.getElementById("soppiya_checkout_btn");
                            soppiya_checkout_btn.setAttribute("disabled", true);
                            soppiya_checkout_btn.style.cursor = `not-allowed`;
                            soppiya_checkout_btn.style.color = `rgba(255,255,255,50%)`;
                        }

                    });


                }, 1000)
            }
        });



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
    }, 1450);
};