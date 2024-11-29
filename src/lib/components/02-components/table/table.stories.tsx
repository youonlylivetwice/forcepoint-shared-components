import { ArrowRightIcon } from '../../00-tokens/icons';
import Link from '../../01-elements/link/link';
import TableColumn from './table-column';
import TableRow from './table-row';
import TableWrapper from './table-wrapper';

const meta = {
  title: 'Components/Table',
};

export default meta;

export const Default = () => {
  return (
    <TableWrapper
      heading="Figma ipsum component variant main layer. Duplicate align figjam."
      subheading="Figma ipsum component variant main layer. Scale editor mask bullet flatten export team blur. Main prototype scrolling scale frame main distribute. Undo image vertical ipsum italic link layout community project arrow."
      description="DISCLAIMER: Product comparison is based off of in-product capabilities and cross-portfolio integrations available from the same vendor as of Mar 1st, 2023. Comparisons do not include integrations with third-party vendors. Feature comparison is based off of each vendor’s most recent and modern version available as of Mar 1st, 2023. Information is based off of data collected from public websites and forums, analyst papers, and product datasheets as of Mar 1st, 2023.">
      <TableRow>
        <TableColumn>
          <div>
            <Link endIcon={<ArrowRightIcon />} animated>
              Download Full Table
            </Link>
          </div>
        </TableColumn>
        <TableColumn bgColor="#F5F6F6">
          <p className="md:text-center">
            <strong>Forcepoint</strong>
          </p>
        </TableColumn>
        <TableColumn>
          <p className="flex flex-col md:text-center">
            <strong>Legacy Security Vendors</strong>
            <small>(e.g. Zscaler, Netskope)</small>
          </p>
        </TableColumn>
        <TableColumn>
          <p className="flex flex-col md:text-center">
            <strong>Legacy Networking Vendors</strong>
            <small>(e.g. Palo Alto, Fortinet, Check Point)</small>
          </p>
        </TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>
          <div>
            <p>
              <strong>Data Security Features</strong>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur. Laoreet aliquet diam eu
              commodo nisl pretium. Dictumst justo accumsan.
            </p>
          </div>
        </TableColumn>
        <TableColumn bgColor="#F5F6F6">
          <svg
            width="30px"
            height="30px"
            className="mx-auto"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
              fill="#003654"
            />
          </svg>
        </TableColumn>
        <TableColumn>
          <svg
            width="30px"
            height="30px"
            className="mx-auto"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
              fill="#a2a9ad"
            />
          </svg>
        </TableColumn>
        <TableColumn>
          <svg
            width="30px"
            height="30px"
            className="mx-auto"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
              fill="#a2a9ad"
            />
          </svg>
        </TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>
          <div>
            <p>
              <strong>Data Security Features</strong>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur. Laoreet aliquet diam eu
              commodo nisl pretium. Dictumst justo accumsan.
            </p>
          </div>
        </TableColumn>
        <TableColumn bgColor="#F5F6F6">
          <p className="text-center">
            <svg
              width="30px"
              height="30px"
              className="mx-auto"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                fill="#003654"
              />
            </svg>
            <br />
            <span className="text-h3 text-navy">AAA</span>
            <br />
            <span className="text-grey">Lorem ipsum dolor sit</span>
          </p>
        </TableColumn>
        <TableColumn>
          <p className="text-center">
            <svg
              width="30px"
              height="30px"
              className="mx-auto"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                fill="#a2a9ad"
              />
            </svg>
            <br />
            <span className="text-h3 text-black">AAA</span>
            <br />
            <span className="text-grey">Lorem ipsum dolor sit</span>
          </p>
        </TableColumn>
        <TableColumn>
          <p className="text-center">
            <svg
              width="30px"
              height="30px"
              className="mx-auto"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                fill="#a2a9ad"
              />
            </svg>
            <br />
            <span className="text-h3 text-black">AAA</span>
            <br />
            <span className="text-grey">Lorem ipsum dolor sit</span>
          </p>
        </TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>
          <div>
            <p>
              <strong>Before Last column</strong>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur. Laoreet aliquet diam eu
              commodo nisl pretium. Dictumst justo accumsan.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Laoreet aliquet diam eu
              commodo nisl pretium. Dictumst justo accumsan.
            </p>
          </div>
        </TableColumn>
        <TableColumn bgColor="#F5F6F6">
          <p className="text-center">
            <span className="text-h3 text-navy">AAA</span>
            <br />
            <span className="text-grey">Lorem ipsum dolor sit</span>
          </p>
        </TableColumn>
        <TableColumn>
          <p className="text-center">
            <span className="text-h3 text-black">AAA</span>
            <br />
            <span className="text-grey">Lorem ipsum dolor sit</span>
          </p>
        </TableColumn>
        <TableColumn>
          <p className="text-center">
            <span className="text-h3 text-black">AAA</span>
            <br />
            <span className="text-grey">Lorem ipsum dolor sit</span>
          </p>
        </TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>
          <div>
            <p>
              <strong>Last Column</strong>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur. Laoreet aliquet diam eu
              commodo nisl pretium. Dictumst justo accumsan.
            </p>
          </div>
        </TableColumn>
        <TableColumn bgColor="#F5F6F6">
          <p className="text-center">
            <span className="text-h3 text-navy">AAA</span>
            <br />
            <span className="text-grey">Lorem ipsum dolor sit</span>
          </p>
        </TableColumn>
        <TableColumn>
          <p className="text-center">
            <span className="text-h3 text-black">AAA</span>
            <br />
            <span className="text-grey">Lorem ipsum dolor sit</span>
          </p>
        </TableColumn>
        <TableColumn>
          <p className="text-center">
            <span className="text-h3 text-black">AAA</span>
            <br />
            <span className="text-grey">Lorem ipsum dolor sit</span>
          </p>
        </TableColumn>
      </TableRow>
    </TableWrapper>
  );
};
