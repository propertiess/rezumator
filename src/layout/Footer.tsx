import Image from 'next/image';
import { FC } from 'react';
import GitHubIcon from '../components/home/assets/GithubIcon.svg';
import styles from './Footer.module.css';

const Footer: FC = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <div className={styles.footer_wrapper}>
        <div className='container mx-auto'>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <a
                href='https://github.com/propertiess/'
                rel='noreferrer'
                target='_blank'
              >
                <Image src={GitHubIcon} alt='https://github.com/propertiess/' />
              </a>
              <p className={styles.text}>
                &copy; Rezumator 2022. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
