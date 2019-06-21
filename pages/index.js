import Link from "next/link";

function Home() {
  return (
    <div className="container">
      
      <Link href="/search">
        <a>Search page</a>
      </Link>

      <style global jsx>{`
        body {
          font-family: Helvetica;
        }
        .search {
          display: flex;
        }
        .search input {
          flex-grow: 1;
          line-height: 2em;
          border: 1px solid #ccc;
          padding: 5px 15px;
          font-size: 16px;
        }

        .search input:focus {
          outline: none;
        }
        .search__keyword-input {
          border-bottom-left-radius: 5px;
          border-top-left-radius: 5px;
        }
        .search__location-input {
          border-left: none;
        }
        .search__submit {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
          border-bottom-right-radius: 5px;
          border-top-right-radius: 5px;
          border: 1px solid #ccc;
          font-size: 16px;
          padding: 7px 16px;
          cursor: pointer;
        }

        .search__submit:hover {
          background: #efefef;
        }

        .container {
          max-width: 700px;
          margin: 60px auto;
        }
        .row {
          display: flex;
          justify-content: center;
          margin-left: -30px;
        }
        .col {
          flex-grow: 1;
          margin-left: 30px;
        }

        label {
          display: block;
          margin-bottom: 7px;
        }
        .filterCard {
          padding: 15px;
          border: 1px solid #efefef;
        }
        .filterCard input {
          margin-right: 12px;
        }
      `}</style>
    </div>
  );
}

export default Home;
