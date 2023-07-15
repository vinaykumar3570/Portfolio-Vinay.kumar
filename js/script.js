
    $(document).ready(function(){
        $(".switcher-btn").click(function(){
            $(".color-switcher").toggleClass('active')
        })
    })
    let themeBtn = document.querySelectorAll('.theme-btn');

    themeBtn.forEach(color => {
        color.addEventListener('click', () => {
            let dataColor = color.getAttribute('data-color');
            document.querySelector(':root').style.setProperty('--primary-color', dataColor )
        })
    })


    $(document).ready(function () {
        $(".fa-solid").click(function () {
            $(this).toggleClass("fa-xmark");
        })
    });