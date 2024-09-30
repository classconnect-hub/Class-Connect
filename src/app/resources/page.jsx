import React from "react";
import Buttons from "./buttons";
import styles from "./resources.module.css";

const Resources = () => {
  return (
    <div className={styles.page}>
      <div className={styles.titleContainer}>
        <h1 className={styles.middleTitle}>Resources</h1>
      </div>
      <Buttons />
      <div className={styles.dayTitle}>
        <h2>-</h2>
      </div>
      <div className={styles.container}>
        <h2>Day 1 Resources:</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Resource Name</th>
                <th>Description</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Recording Link</td>
                <td>YouTube Livestream</td>
                <td>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/live/SipMNRxDLAs?feature=shared"
                  >
                    Click here
                  </a>
                </td>
              </tr>
              <tr>
                <td>VS Code Setup</td>
                <td>Settings & Extentions for VSCode</td>
                <td>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Edb46MQ7ffNMqzX8F110H9MBrcHi9sA2ZPKYis1x2t_Auw?e=LUQNBZ"
                  >
                    Click here
                  </a>
                </td>
              </tr>
              <tr>
                <td>HTML Tag Reference</td>
                <td>All HTML tags references</td>
                <td>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/EUGSTOkz2ChJiUMu_K6tDygBmq3VgFKAtqGR09hM3M8aRA?e=Fflg56"
                  >
                    Click here
                  </a>
                </td>
              </tr>
              <tr>
                <td>HTML Further Reading</td>
                <td>
                  Links of tutorials, as well as a few others. Use them to learn
                  more about the topics we have covered
                </td>
                <td>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Ee5JHrXBdg1AjrRAWAtzQzABSCFHSTpaimWiaf_3b92adw?e=Qtpcpt"
                  >
                    Click here
                  </a>
                </td>
              </tr>
              <tr>
                <td>CSS Property Reference</td>
                <td>All CSS Property references</td>
                <td>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ETclfbrPKOVJn2i8LA9Njr0Bwpauf9G35bcgHuWzq9nW_Q?e=o0ItYd"
                  >
                    Click here
                  </a>
                </td>
              </tr>
              <tr>
                <td>CSS Further Reading</td>
                <td>
                  Links of tutorials, as well as a few others. Use them to learn
                  more about the topics we have covered
                </td>
                <td>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Ea097s9IeX1FqmBSFdGPMXABt5A9L8qIZvVWHjS-LrYg9w?e=y3ge06"
                  >
                    Click here
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.container}>
        <h2>Day 2 Resources:</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Resource Name</th>
                <th>Description</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Recording Link</td>
                <td>YouTube Video</td>
                <td>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://youtu.be/Md_9pgU-780"
                  >
                    Click here
                  </a>
                </td>
              </tr>
              <tr>
                <td>JS Syntax</td>
                <td>JS Syntax Funtion</td>
                <td>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/Ec-F_FZqJtFBvNeIVLsiN_UBfbvAy_P0l8wAgf602yK3Cg?e=WBpoOP"
                  >
                    Click here
                  </a>
                </td>
              </tr>
              <tr>
                <td>JS Further Reading</td>
                <td>JS Function Reference</td>
                <td>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://somaiya0-my.sharepoint.com/:b:/g/personal/riddhesh_c_somaiya_edu/ERVZc7Co4LlImzNvkZRr4_ABxKnJm-xOzcr9nxrtrchixQ?e=rU95h6"
                  >
                    Click here
                  </a>
                </td>
              </tr>
              <tr>
                <td>DOM Documentation</td>
                <td>mozilla MDN documentation</td>
                <td>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
                  >
                    Click here
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.container}>
        <h2>Day 3 Resources:</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Resource Name</th>
                <th>Description</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Recording Link</td>
                <td>YouTube Video</td>
                <td>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://youtu.be/1ThrNBcjbI4"
                  >
                    Click here
                  </a>
                </td>
              </tr>
              <tr>
                <td>Github Desktop</td>
                <td>repo link to install github desktop file for ubantu</td>
                <td>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/shiftkey/desktop/releases"
                  >
                    Click here
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.container}>
        <h2>Day 4 Resources:</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Resource Name</th>
                <th>Description</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Recording Link</td>
                <td>YouTube Video</td>
                <td>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://youtu.be/oczwp0hxXt8"
                  >
                    Click here
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Resources;
