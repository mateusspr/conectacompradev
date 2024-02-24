import { toast } from "sonner"


const CardProduct = () => {

  function handleTeste(event) {
    event.preventDefault()

    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Item' }), 500));

    toast.promise(promise, {
      loading: 'Carregando',
      success: (data) => {
        return `${data.name} adicionado ao carrinho`;
      },
      error: 'Error',
    });
  }

  return (
    <div className=" card card-compact w-96 sm:w-28 md:w-52 lg:w-80 bg-base-100 shadow-xl">
      <figure><img className="" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={handleTeste}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardProduct