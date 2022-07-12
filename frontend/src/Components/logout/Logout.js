import React from 'react'
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated } from "../../redux/actions/authentication.action";
import Layout from '../sub-component/layout/Layout';
import { NavLink, useNavigate } from "react-router-dom";
import { Section, MainSection, HeadingText, SlimText } from "../../styles/profile/updateProfile/UpdateProfile.styles";
import { SignupText, SignupBlueText, BlackWhiteButton, InputLabel, TextInput, MainFormSection, CloseIcon, TwitterIcon, SignInRoot, InputError } from "../../styles/registration/SignInUp.styles";
import { SLogoIconHeader } from '../../styles/slidebar/Sidebar.styles';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        // console.log("----logout---")
        dispatch(setIsAuthenticated(false));
        navigate('/');
    }

    return (
        <Layout>
            <Helmet>
                <title>Logout</title>
            </Helmet>
            <Section>
                <MainSection>                
                    <MainFormSection>
                        <HeadingText> 
                            <SLogoIconHeader /> 
                        </HeadingText>
                        <HeadingText left> Log out of Twitter? </HeadingText>
                        <SlimText left>You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account. </SlimText>

                        <BlackWhiteButton filled onClick={logout}>Log out</BlackWhiteButton>
                        <NavLink to="/">
                            <BlackWhiteButton>Cancel</BlackWhiteButton>
                        </NavLink>
                    </MainFormSection>
                </MainSection>
            </Section>
        </Layout>
    )
}
// <button onClick={logout}>Logout</button>
export default Logout