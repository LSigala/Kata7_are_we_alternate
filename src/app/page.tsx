'use client';
import 'bootstrap/dist/css/bootstrap.css';

export default function Form1() {

    async function orderSentence(e: any){
        e.preventDefault();
    
        const data = {
            Word: (e.target.word.value)
        }

        const dataSeparated = data.Word.split("")
        const vowels = ["a", "e", "i", "o", "u"]
        let validate = ""

        for (let i = 0; i < dataSeparated.length; i++) {
          const currentSymbol = dataSeparated[i];
          const nextSymbol = dataSeparated[i + 1];
          
          if (vowels.includes(currentSymbol) && vowels.includes(nextSymbol) == false || vowels.includes(currentSymbol) == false && vowels.includes(nextSymbol) || nextSymbol == undefined){
            
          }else{
            alert("False")
            validate = "false"
            break;
          }
        }
        if (validate == "") {
          alert("True")
        }
      }

  return (
      <form onSubmit={orderSentence} className="container col-6 text-center mt-4 bg-light">
        <div className="pb-2">
            <div className="form-group mt-5 p-3 d-flex">
                <div className="form-group mb-3  mx-auto">
                    <label>Enter Word</label>
                    <input type="text" className="form-control" id="word" required aria-describedby="emailHelp " />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mb-3 mx-auto d-block">Send Data</button>
        </div>
    </form>
  );
}