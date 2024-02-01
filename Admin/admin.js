//Xóa hàng
var rows = document.querySelectorAll('.row');
var dels = document.querySelectorAll('.del');

dels.forEach((del,index1) => {
    del.addEventListener('click',() => {
        rows.forEach((row,index2) => {
            if(index1 === index2) {
                row.remove();
            }
        })
    })   
});

// Sửa content
document.addEventListener('DOMContentLoaded', function () {
    var edits = document.querySelectorAll('.edit');
    var nameProducts = document.querySelectorAll('.name-product span');
    var newNameProducts = document.querySelectorAll('.change-name');
    var idProducts = document.querySelectorAll('.id-product span');
    var newidProducts = document.querySelectorAll('.change-id');

    edits.forEach((edit, index1) => {
        edit.addEventListener('click', () => {
            nameProducts.forEach((product, index2) => {
                if (index1 === index2) {
                    var oldnameProduct = product.textContent;
                    product.style.display = "none";
                    newNameProducts[index2].style.display = 'block';

                    newNameProducts[index2].addEventListener('keydown', (e) => {
                        //Khi người dùng bấm phím enter
                        if (e.keyCode === 13) {
                            product.style.display = "block";
                            newNameProducts[index2].style.display = 'none'; // thẻ input ẩn đi

                            if (newNameProducts[index2].value !== '') {
                                product.innerHTML = newNameProducts[index2].value;
                            } else {
                                product.innerHTML = oldnameProduct;
                            }
                        }
                    });
                }
            });

            idProducts.forEach((id, index3) => {
                if (index1 === index3) {
                    var oldidProduct = id.textContent;
                    id.style.display = "none";
                    newidProducts[index3].style.display = 'block';

                    newidProducts[index3].addEventListener('keydown', (e) => {
                        if (e.keyCode === 13) {
                            id.style.display = "block";
                            newidProducts[index3].style.display = 'none';

                            if (newidProducts[index3].value !== '') {
                                id.innerHTML = newidProducts[index3].value;
                            } else {
                                id.innerHTML = oldidProduct;
                            }
                        }
                    });
                }
            });
        });
    });
});
