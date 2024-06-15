import "../pages/SelectFlight.css";
import notfound from "/Group 33.png";

function Notfound() {
  return (
    <>
      <img src={notfound} />
      <p className="mt-4 not-found">
        Maaf, pencarian Anda tidak ditemukan
        <br />
        <span>Coba cari perjalanan lainnya</span>
      </p>
    </>
  );
}

export default Notfound;
