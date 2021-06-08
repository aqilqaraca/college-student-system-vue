<template>
  <div>
    <div class="search">
      <nav class="navbar navbar-light bg-light">
  <form class="form-inline d-flex">
    <input class="form-control mr-sm-2 mx-2"  type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
    </div>
    <div style="overflow-x:auto">
      <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Date</th>
          <th scope="col">Result</th>
          <th scope="col">Points</th>
          <th scope="col">Classes</th>
          <th scope="col">Time</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>UNIT 1B</td>
          <td>19/04/2021</td>
          <td style="color : red">Failed</td>
          <td>30</td>
          <td>Celt English 01</td>
          <td>5 min</td>
          <td>Visible</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>UNIT + 3B</td>
          <td>19/04/2021</td>
          <td style="color : red">Failed</td>
          <td>30</td>
          <td>Celt English 01</td>
          <td>5 min</td>
          <td>Visible</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>A1 + UNIT 2B</td>
          <td>19/04/2021</td>
          <td style="color : green">Passed</td>
          <td>30</td>
          <td>Celt English 01</td>
          <td>5 min</td>
          <td>Visible</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<style scoped>
  th {
    color: #1e398f;
  }

  td {
    color: #ee7100;
  }
  button{
      border-radius: 0.25rem;
    border: 2px solid #1e398f;
    background-color: #1e398f;
    color: #fff;
  }
  button:hover{
     background-color: transparent; 
     border: 2px solid #1e398f;
     color: #1e398f;
  }

</style>
