import Swal from "sweetalert2";
import "./AlertStyles.css";

export function showSuccessAlert() {
  Swal.fire({
    title: "Thank You",
    text: "Your inquiry has been received.",
    icon: "success",
    customClass: {
      popup: "custom-popup-class",
      title: "custom-title-class",
      content: "custom-content-class",
    },
    buttonsStyling: false,
    showCloseButton: true,
    showCancelButton: false,
    confirmButtonClass: "your-confirm-button-class",
    confirmButtonText: "continue",
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("Success Pop-Up Closed.");
    }
  });
}

export function showErrorAlert(text) {
  Swal.fire({
    title: "Error",
    text: text || "Sorry, something went wrong. Please try again.",
    icon: "error",
    customClass: {
      popup: "custom-popup-class",
      title: "custom-title-class",
      content: "custom-content-class",
    },
    buttonsStyling: false,
    showCloseButton: true,
    showCancelButton: false,
    confirmButtonClass: "your-confirm-button-class",
    confirmButtonText: "continue",
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("Error Pop-Up Closed.");
    }
  });
}
