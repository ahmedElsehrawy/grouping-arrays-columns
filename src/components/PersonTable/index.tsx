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

const TABLE_COLS = [
  { label: "Date", dataIndex: "date" },
  { label: "First Name", dataIndex: "first_name" },
  { label: "Last Name", dataIndex: "last_name" },
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
          {TABLE_COLS.map((col) => (
            <th key={col.dataIndex}>{col.label}</th>
          ))}
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
            {TABLE_COLS.map((col) => (
              <td key={col.dataIndex}>
                <ul>
                  {groupedData[year].map((row) => (
                    <li
                      key={row.first_name + row.last_name}
                      className={styles.list_item}
                    >
                      {row[col.dataIndex as keyof Person]}
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PersonTable;
