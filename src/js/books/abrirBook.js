document.addEventListener("DOMContentLoaded", function () {
    var clientesLink = document.getElementById("books-link");
    if (clientesLink) {
        clientesLink.addEventListener("click", function (event) {
            event.preventDefault();
            createBooks();
        });
    }
});

function createBooks() {
    $content.innerHTML = `
    <div class="p-4 mt-14">
      <div class="custom-container">
        <p class="custom-paragraph">Libros</p>
        <form class="custom-form">
          <div class="custom-relative">
          <input
          type="search"
          id="busquedaCliente"
          class="custom-input"
          placeholder="Buscar un cliente"
        />
          </div>
        </form>
      </div>
  
      <div class="custom-table-container">
        <table class="custom-table">
          <thead>
            <tr>
              <th scope="col" class="custom-table-header">Nombre</th>
              <th scope="col" class="custom-table-header">Email</th>
              <th scope="col" class="custom-table-header">Acción</th>
            </tr>
          </thead>
          <tbody id="clients">
          <tr class="custom-table-row">
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

    // $clients = document.querySelector("#clients");
    // ipcRenderer.send("request-all-clients");

    // const $buscadorCli = document.querySelector("#busquedaCliente");
    // $buscadorCli.addEventListener("input", filtrarClientes);
}
