import { useMemo } from "react";
import { groupDataByYear } from "../../utils/groupArrayColumnsByValue";
import styles from "./PersonTable.module.css";

interface Person {
  date: string;
  first_name: string;
  last_name: string;
}

const DUNNY_DATA: Person[] = [
  { date: "2022-03-01", first_name: "Ahmed", last_name: "Nasar" },
  { date: "2022-04-15", first_name: "Killian", last_name: "Morphy" },
  { date: "2023-07-22", first_name: "John", last_name: "Doe" },
  { date: "2021-08-13", first_name: "Emilia", last_name: "Clark" },
  { date: "2020-12-01", first_name: "Millie", last_name: "Brown" },
  { date: "2019-05-10", first_name: "Ramy", last_name: "Malek" },
  { date: "2018-11-21", first_name: "Emazzia", last_name: "Darcy" },
];

const PersonTable = () => {
  const groupedData = useMemo(() => groupDataByYear(DUNNY_DATA, "date"), []);
  const years = Object.keys(groupedData);

  return (
    <table className={styles.table}>
      <caption className={styles.caption}>Persons Data Grouped by Year</caption>
      <thead>
        <tr>
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
            <td>{year}</td>
            <td>
              <ul className={styles.grouped_list}>
                {groupedData[year].map((el) => (
                  <li className={styles.list_item}>{el.first_name} </li>
                ))}
              </ul>
            </td>
            <td>
              <ul className={styles.grouped_list}>
                {groupedData[year].map((el) => (
                  <li className={styles.list_item}>{el.last_name}</li>
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
