import { useMemo } from "react";
import { groupArrayColumnsByKey } from "../../utils/groupArrayColumnsByValue";
import styles from "./PersonTable.module.css";

interface Person {
  date: string;
  first_name: string;
  last_name: string;
}

const DUMMY_DATA: Person[] = [
  { date: "2022-03-01", first_name: "Ahmed", last_name: "Nasar" },
  { date: "2022-04-15", first_name: "Killian", last_name: "Morphy" },
  { date: "2023-07-22", first_name: "John", last_name: "Doe" },
  { date: "2021-08-13", first_name: "Emilia", last_name: "Clark" },
  { date: "2020-12-01", first_name: "Millie", last_name: "Brown" },
  { date: "2019-05-10", first_name: "Ramy", last_name: "Malek" },
  { date: "2018-11-21", first_name: "Emazzia", last_name: "Darcy" },
];

const PersonTable = () => {
  const groupedData = useMemo(
    () => groupArrayColumnsByKey(DUMMY_DATA, "date"),
    []
  );
  const years = Object.keys(groupedData);

  return (
    <table className={styles.table}>
      <caption className={styles.caption}>Persons Data Grouped by Year</caption>
      <thead>
        <tr>
          <th>Year</th>
          <th>Date</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {years.map((year) => (
          <tr
            key={year}
            className={
              groupedData[year].length > 1
                ? styles.yearGroup
                : styles.uniqueYears
            }
          >
            <td>{groupedData[year].length > 1 ? year : null}</td>
            <td>
              <ul>
                {groupedData[year].map((el) => (
                  <li
                    key={el.first_name + el.last_name}
                    className={styles.list_item}
                  >
                    {el.date}
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {groupedData[year].map((el) => (
                  <li
                    key={el.first_name + el.last_name}
                    className={styles.list_item}
                  >
                    {el.first_name}
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {groupedData[year].map((el) => (
                  <li
                    key={el.first_name + el.last_name}
                    className={styles.list_item}
                  >
                    {el.last_name}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PersonTable;
