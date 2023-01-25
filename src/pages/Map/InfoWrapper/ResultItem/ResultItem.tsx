import { FaParking } from 'react-icons/fa';
import { IoCafeOutline } from 'react-icons/io5';
import { MdCircle } from 'react-icons/md';
import { LIGHT_GRAY_COLOR } from '../../../../common/colors';

interface ResultItemProps {
  info: {
    ESNTL_ID: number | string;
    FCLTY_NM: number | string;
    LCLAS_NM: number | string;
    MLSFC_NM: number | string;
    ZIP_NO: number | string;
    FCLTY_ROAD_NM_ADDR: number | string;
    FCLTY_LA: number | string;
    FCLTY_LO: number | string;
    WORKDAY_OPN_BSNS_TIME: number | string;
    WORKDAY_CLOS_TIME: number | string;
    SAT_OPN_BSNS_TIME: number | string;
    SAT_CLOS_TIME: number | string;
    SUN_OPN_BSNS_TIME: number | string;
    SUN_CLOS_TIME: number | string;
    RSTDE_OPN_BSNS_TIME: number | string;
    RSTDE_CLOS_TIME: number | string;
    RSTDE_GUID_CN: number | string;
    TEL_NO: number | string;
    OPTN_DC: number | string;
    ADIT_DC: number | string;
  };
}

export default function ResultItem({ info }: ResultItemProps) {
  const {
    FCLTY_NM: name,
    MLSFC_NM: category,
    FCLTY_ROAD_NM_ADDR: address,
    OPTN_DC: description,
  } = info;

  return (
    <div
      style={{
        width: '100%',
        borderBottom: '1px solid black',
        padding: '1rem 0',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <MdCircle
            style={{
              color: LIGHT_GRAY_COLOR,
              marginRight: '0.5rem',
            }}
          />
          <span style={{ height: '0.8rem', marginRight: '0.5rem' }}>
            {name}
          </span>
          <FaParking style={{ marginRight: '0.2rem' }} />
          <IoCafeOutline />
        </div>
        <div
          style={{
            fontSize: '0.9rem',
            borderRadius: '6px',
            border: '1px solid black',
            padding: '0.2rem 0.5rem',
          }}
        >
          {category}
        </div>
      </div>
      <div style={{ paddingBottom: '1rem', fontSize: '0.9rem' }}>{address}</div>
      <div style={{ fontSize: '0.9rem', color: LIGHT_GRAY_COLOR }}>
        {description}
      </div>
    </div>
  );
}
