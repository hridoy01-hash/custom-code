
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

        // account setting
        /* const BUSINESS_ID = "6304aa113cb8eba9248eac8d";
        const Referer = `https://dipbip.com/`;
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiY3VzdG9tZXIiLCJ1c2VySWQiOiI2MzA1OGE0OTZhYTczOWMzYzE3ZjQ3M2QiLCJidXNpbmVzc0lkIjoiNjMwNGFhMTEzY2I4ZWJhOTI0OGVhYzhkIiwidG9rZW5LZXkiOiIzOCIsImlhdCI6MTY2MzY3MDgwMn0.uEQFbTKo6fe-47rc1fMbwPA2wmsdpW2gld1EuKyuuhw`;

        const LoadDataFunction = async (url) => { try { let response = await fetch(url, { method: "get", headers: { "businessid": `${BUSINESS_ID}`, "referer": `${Referer}`, "token": `${token}` } }); response = await response.json(); if (response.Error) { return console.log(response.Error) }; return response; } catch (e) { return }; };


        (async function userNameDisplay() {
            const userInfo = await LoadDataFunction(`https://api.soppiya.com/v2.1/site/data/account/info/get`);
            const UserName = userInfo.name;
            const s0000_account_large_device_icon_parent_id = document.getElementById("s0000_account_large_device_icon_parent_id");
            const s0000_account_large_device_icon_id = document.getElementById("s0000_account_large_device_icon_id");
            s0000_account_large_device_icon_id.innerText = `${UserName}`;
            s0000_account_large_device_icon_parent_id.appendChild(s0000_account_large_device_icon_id);
        })(); */

        const billCorrection = document.querySelector(".invoiceHeader_address_title__QNFJg");
        billCorrection.innerText = `Bill`;

        
       const pos3Invoice_powerByText__VAi00 = document.querySelector(".pos3Invoice_powerByText__VAi00");
       pos3Invoice_powerByText__VAi00.textContent = `Powered by KropZAgro`;
       


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

/* 
        const s0000_special_category_nav_list_id = document.getElementById("s0000_special_category_nav_list_id");
        const s0000_category_nav_item = elementMaker("li", ["s0000_category_nav_item"]);
        s0000_special_category_nav_list_id.appendChild(s0000_category_nav_item);
        const s0000_category_nav_link_wrapper = elementMaker("div", ["s0000_category_nav_link_wrapper"]);
        s0000_category_nav_item.appendChild(s0000_category_nav_link_wrapper);
        const s0000_category_nav_link = elementMaker("span", ["s0000_category_nav_link"]);
        s0000_category_nav_link.textContent = `External Item`;
        s0000_category_nav_link_wrapper.appendChild(s0000_category_nav_link);
*/

