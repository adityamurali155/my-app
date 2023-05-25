import React, { useState, useEffect } from "react";
import Grid from "./Components/Grid";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Hero from "./Components/Hero";

export default function App() {
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState(-1);
  const getUsers = () => {
    fetch(
      "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.results);
        setActive(0);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-16 bg-[gainsboro]">
      <Header />
      {active >= 0 && <Hero user={users[active]} />}
      <Grid>
        {active >= 0 &&
          users.map((user, i) => {
            return (
              <Card
                setActive={() => {
                  setActive(i);
                }}
                active={active == i}
                user={user}
                key={user.name.first + "-" + i}
              ></Card>
            );
          })}
      </Grid>
    </div>
  );
}
