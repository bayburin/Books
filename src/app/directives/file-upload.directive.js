export default function() {
  return {
    link: function(scope, element, attrs) {
      element.on('change', (event) => {
        let file = event.srcElement.files[0];

        let reader = new FileReader();
        reader.onload = (event) => scope.$ctrl.book.image = event.target.result;

        reader.readAsDataURL(file);
      });
    }
  }
}
