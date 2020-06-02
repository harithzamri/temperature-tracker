export default {
  createEmployee: (employee) => {
    return fetch("/employee", {
      method: "post",
      body: JSON.stringify(employee),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
};
