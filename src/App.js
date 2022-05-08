import { useState } from 'react';
import styles from './app.module.scss';
import { IoNewspaperOutline } from 'react-icons/io5';
import { AiOutlineAudit } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FcGraduationCap, FcInternal, FcLike, FcHighPriority, FcOk } from 'react-icons/fc';
import { ImPaste } from 'react-icons/im';


function App() {
  const [value, setValue] = useState(null);
  const [accessCode, setAccessCode] = useState("");
  // https://doselect.com/gateways/test?access_code=w1e7TfQ8FoIDstnslyMKHndmkvLL7mNJBgJOifL9HamV%2BuHu1yeeOuEPKHV80zTcDsjVE7dlFQ8XdsLV4zEa2RkkpNsyUEQeoiNYdWp8XEI%3D

  const SubmitHandler = () => {
    const queryURL = new URL(value);
    const access_code = queryURL.searchParams.get('access_code');
    setAccessCode(encodeURIComponent(access_code));
  }
  const ResultHandler = () => {
    window.location.href = `https://doselect.com/reports/hacker?access_code=${accessCode}`;
  }

  return (
    <section className={styles.App}>
      <div className={styles.headersection}>
        <h1>d<FcOk />result</h1>
      </div>
      <div className={styles.mainSection}>

        <div className={styles.col_1}>
          <div className={styles.mainhead}>
            <IoNewspaperOutline className={styles.icon} />
            <div>
              <h2>Capgemini Adapt Program Result</h2>
              <h3>Get your Result</h3>
            </div>
          </div>
        </div>

        <div className={styles.maininputSection}>
          <h2><ImPaste /> Paste Your Assisement Link here</h2>
          <div className={styles.inputContainer}>
            <input className={styles.input} type="text" onChange={(e) => setValue(e.target.value)} placeholder="enter your acess code" />
            <button className={styles.btn} onClick={SubmitHandler}>Submit</button>

          </div>
          <span className={styles.note}>Note* : Created for the demonstration purpose, not an actually page by Company or by any oragnization</span>
        </div>



      </div>

      <div className={styles.viewResult}>
        <h2>See your Result Here <FcInternal /></h2>
        {accessCode ?
          <button className={styles.btn} onClick={ResultHandler} ><AiOutlineAudit className={styles.icon} />View Result </button>
          : <span >wait...</span>}
      </div>
      {accessCode?
      <div className={styles.accessCode}>
        <h2>Access Code :</h2> 
        <span>{accessCode}</span>
      </div>
       :""}
      <div className={styles.instruction}>
        <div className={styles.instr_head}>
          <FcGraduationCap className={styles.icon} />
          <h2>Instructions:</h2>
        </div>


        <div className={styles.instructionContainer}>
          <div className={styles.imgContainer}>

            <p className={styles.instruction}>1. Go to email, Copy the assisment link. </p>
            <img src="/img/instruction_1.png" width="400" alt="inst" />
          </div>

          <div className={styles.imgContainer}>
            <p className={styles.instruction}>2. Paste the link and Click on submit. </p>

            <img src="/img/instruction_2.png" width="400" alt="inst" />
          </div>


          <div className={styles.imgContainer}>

            <p className={styles.instruction}>3. Click on View Result. </p>
            <img src="/img/instruction_3.png" width="400" alt="inst" />
          </div>

        </div>
      </div>
      <div className={styles.notice}>
        <FcHighPriority className={styles.icon} />
        <p>doResult is Created for eductional purpose only. Application maybe terminated if requried.</p>
      </div>
      <div className={styles.footersection}>
        <div className={styles.head_1}>
          <FcLike />
          <h2>Built with Love</h2>
        </div>

        <div>
          <a href='https://github.com/yashPurohit01'> <BsGithub className={styles.icon} /></a>
          <a href='https://www.linkedin.com/in/yash-purohit-a135321b1/'> <BsLinkedin className={styles.icon} /></a>
        </div>


        <div className={styles.lower_footer}>
          <p>Created by <strong>Yash Purohit</strong> (M.E.R.N stack Developer) @2022.</p>
        </div>
      </div>

    </section>
  );
}

export default App;
