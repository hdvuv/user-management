import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Wrapper, PageTittle, ButtonDiv } from '../../../shared/styles/CommonStyled';
import { DetailContent } from './DetailStyled';
import { useGetUserQuery } from '../../../services/user/userApi';
import { EMPTY, PARAMS, PATH, QUESTION_MARK } from '../../../constants/Common';
import { strings } from '../../../localization/Localization';
import useAuth from '../../../shared/hooks/useAuth';
import SkeletonCustomize from '../../skeleton/SkeletonCustomize';

const DetailUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, error, isLoading } = useGetUserQuery(
    location.search ? location.search.replace(QUESTION_MARK, EMPTY) : PARAMS.ID_RANDOM
  );

  useAuth();

  return (
    <>
      <Container>
        <Wrapper>
          <PageTittle>
            <p>{strings.detail.detail_title}</p>
          </PageTittle>
          {error ? (
            <> {strings.common.error_loading_msg} </>
          ) : isLoading ? (
            <SkeletonCustomize />
          ) : data ? (
            <>
              <DetailContent>
                <table>
                  <tbody>
                    <tr>
                      <td>{strings.detail.name}</td>
                      <td>{data?.name}</td>
                    </tr>
                    <tr>
                      <td>{strings.detail.sex}</td>
                      <td>{data?.sex}</td>
                    </tr>
                    <tr>
                      <td>{strings.detail.phone}</td>
                      <td>{data?.phone}</td>
                    </tr>
                    <tr>
                      <td>{strings.detail.email}</td>
                      <td>{data?.email}</td>
                    </tr>
                    <tr>
                      <td>{strings.detail.address}</td>
                      <td>{data?.address}</td>
                    </tr>
                    <tr>
                      <td>{strings.detail.job}</td>
                      <td>{data?.job}</td>
                    </tr>
                    <tr>
                      <td>{strings.detail.position}</td>
                      <td>{data?.position}</td>
                    </tr>
                    <tr>
                      <td>{strings.detail.company}</td>
                      <td>{data?.company}</td>
                    </tr>
                    <tr>
                      <td>{strings.detail.working_address}</td>
                      <td>{data?.workingAddress}</td>
                    </tr>
                  </tbody>
                </table>
              </DetailContent>
              <ButtonDiv>
                <button onClick={() => navigate(PATH.LIST)}>{strings.detail.back_btn}</button>
              </ButtonDiv>
            </>
          ) : null}
        </Wrapper>
      </Container>
    </>
  );
};

export default DetailUser;
