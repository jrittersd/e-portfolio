import styles from "./sidebar.module.css";

type SidebarProps = {
  title?: string;
  data: Array<{
    subTitle: string;
    links: Array<{
      page: string;
      href: string;
    }>;
  }>;
  isOpen?: boolean;
};

export default function Sidebar(props: SidebarProps) {
  const sidebarTitle = props.title ? props.title : "Quick Links";
  const sidebarOpen = props.isOpen ? props.isOpen : false;

  return (
    <>
      {sidebarOpen && (
        <div className={styles.sideBarDiv}>
          <h2>{sidebarTitle}</h2>
          {props.data.map((box) => {
            return (
              <>
                <div className={styles.sideBarBox}>
                  <h4 className={styles.sideBarSubTitle}>{box.subTitle}</h4>
                  <ul className={styles.linkList}>
                    {box.links.map((link) => {
                      return (
                        <li className={styles.listElem}>
                          <a className={styles.link} href={link.href}>
                            {link.page}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
}
