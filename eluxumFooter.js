window.onload = () => {
    setTimeout(function () {

        const s0000_footer_row_three_col_two = document.querySelector(".s0000_footer_row_three_col_two");
        const payWithBanner = elementMaker("img");
        setAttributes(payWithBanner, { "src": `https://i.ibb.co/fkP1VpD/SSLCOMMERZ-Pay-With-logo-All-Size-Aug-21-02.png` });
        payWithBanner.style.width = `100%`;
        payWithBanner.style.height = `85px`;
        payWithBanner.style.display = `block`;
        s0000_footer_row_three_col_two.appendChild(payWithBanner);

    }, 1200);
}