function renderTable(filter='') {
  const tbody = document.querySelector('#adminTable tbody');
  tbody.innerHTML = '';

  applicants.forEach((app, index) => {
    const fullName = `${app.givenName} ${app.middleName} ${app.surname}`;
    if(filter && !fullName.toLowerCase().includes(filter.toLowerCase()) && !(app.lrn || '').includes(filter)) return;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${app.lrn || '-'}</td>
      <td>${fullName}</td>
      <td>${app.email}</td>
      <td>${app.applicantType || '-'}</td>
      <td>${app.track || '-'}</td>
      <td>${app.strand || '-'}</td>
      <td>${app.status || 'Pending'}</td>
      <td>
        <button class="approve" onclick="updateStatus(${index}, 'Approved')">Approve</button>
        <button class="reject" onclick="updateStatus(${index}, 'Rejected')">Reject</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}
