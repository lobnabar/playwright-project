import { test } from '@playwright/test';

import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/DashboardPage';
import AdminPage from '../pages/admin-page/AdminPage';
import Asserations from '../utilities/Asserations';
import { UserData } from '../test-data/enums/loginData';
const loginUsername: string = UserData.AdminUsername
const loginPassword: string = UserData.AdminPassword

test('playwright project', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const adminPage = new AdminPage(page);
  await loginPage.goToLoginPage();
  await loginPage.enterUsername(loginUsername);
  await loginPage.enterPassword(loginPassword);
  await loginPage.clickLoginButton();
  await dashboardPage.sidePanel.clickOnAdminTap();
  const recordsNumberBeforeAddingUser = await adminPage.viewSystemUserPage.getRecordsCount();
  const userRole = 'Admin';
  const employeeName = 'peter';
  const status = 'Enabled';
  const userName = `omar${Date.now().toString().slice(-4)}`;
  const password = 'omar1234';
  console .log(recordsNumberBeforeAddingUser);
  await adminPage.viewSystemUserPage.clickOnAddBtn();
  await adminPage.addUserPage.chooseUserRole(userRole);
  await adminPage.addUserPage.enterEmployeeName(employeeName);
  await adminPage.addUserPage.chooseUserStatus(status);
  await adminPage.addUserPage.enterUserName(userName);
  await adminPage.addUserPage.enterPassword(password);
  await adminPage.addUserPage.confirmPassword(password);
  await adminPage.addUserPage .clickOnSaveButton();
  const recordsNumberAfterAddingUser = await adminPage.viewSystemUserPage.getRecordsCount();
  console .log(recordsNumberAfterAddingUser);
  await adminPage.viewSystemUserPage.asserations.assertValueToBeGreaterThan(recordsNumberAfterAddingUser, recordsNumberBeforeAddingUser);
  await adminPage.viewSystemUserPage.enterUsernameToSearchField(userName);
  await adminPage.viewSystemUserPage.clickOnSearchBtn();
  await adminPage.viewSystemUserPage.deleteUserUsingItsUsername(userName);
  await adminPage.actions.refreshPage();
  const recordsNumberAfterDeletingUser = await adminPage.viewSystemUserPage.getRecordsCount();
  await adminPage.viewSystemUserPage.asserations.assertValueToBeGreaterThan(recordsNumberAfterAddingUser, recordsNumberAfterDeletingUser);

});
