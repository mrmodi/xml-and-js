const table = document.getElementById(`table`);
const fileName = `./people.xml`;


const loadData = path => new Promise(resolve =>
     {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) =>
     {
      if (target.readyState == 4 && target.status == 200)
       {
        resolve(target.response);
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
});

const filter = (name, NameTerms) => !name.toLowerCase().includes(NameTerms.toLowerCase());

const renderTable = (source, NameTerms) => {
    const htmlString = JSON.parse(source).reduce((previous, next) => 
    {
        const fullName = `${next.first_name} ${next.last_name}`;
        if (NameTerms && filter(fullName, NameTerms)) return previous;

        return previous + `<tr>
            <td>${next.id}</td>
            <td>${fullName}</td>
            <td>${next.email}</td>
            <td>${next.gender}</td>
            <td>${next.ip_address}</td>
        </tr>`;
    }, "");
    table.innerHTML = htmlString;
}

const Submit = (event) => { event.preventDefault();

    const NameTerms = event.target.name.value;
  
    loadData(`./data.json`).then((source) => renderTable(source, NameTerms));
};

const Reset = () => {
    loadData(`./data.json`).then((source) => renderTable(source));
};

Reset();