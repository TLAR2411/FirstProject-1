import Swal from "sweetalert2";

const deleteToast = Swal.mixin({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>',
    
});

  export default deleteToast;