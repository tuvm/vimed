import gender from './gender';
import label from './label';
import status from './status';

export default {
  // Columns
  'Patient Name': 'Tên bệnh nhân',
  Status: 'Trạng thái',
  'Patient ID': 'Mã bệnh nhân',
  'Order ID': 'Mã yêu cầu',
  Sex: 'Giới tính',
  Age: 'Tuổi',
  'Body Part': 'Bộ phận chụp',
  Modality: 'Loại chụp',
  'Creation Date': 'Ngày tải lên',
  'Request Date': 'Ngày chỉ định',
  'Exam Description': 'Mô tả ca khám',
  'Assigned To': 'Bác sĩ phân công',
  'Accession #': 'Số chỉ định #',
  'Ticket #': 'Số phiếu #',
  'Procedure Code': 'Mã quy trình',
  'Procedure Name': 'Tên quy trình',
  'Department Code': 'Mã khoa phòng',
  'Department Name': 'Tên khoa phòng',
  'Body Part Name': 'Tên bộ phận',
  Modalities: 'Loại chụp',
  'Scheduled Date': 'Ngày chỉ định',
  'Referring Physician': 'Bác sĩ chỉ định',
  'Study Date': 'Ngày chụp',
  Actions: 'Thao tác',
  Creator: 'Người tạo',
  'Created At': 'Thời gian tạo',
  'Updated At': 'Thời gian cập nhật',
  'Patient Sex / Age': 'Giới tính / Tuổi bệnh nhân',
  'Referring Doctor': 'Bác sĩ giới thiệu',
  // Institution
  'Institution Name': 'Tên cơ sở',
  Address: 'Địa chỉ',
  Phone: 'Số điện thoại',
  // Role Management
  'Role Name': 'Tên nhóm quyền',
  'Role ID': 'Mã nhóm quyền',
  // Account Management
  Username: 'Tên đăng nhập',
  Roles: 'Nhóm quyền',
  'Full Name': 'Họ và tên',
  'Academic rank/Degree': 'Học hàm/Học vị',
  'Expired Date': 'Ngày hết hạn',
  // Template Management
  Name: 'Tên',
  Order: 'Chỉ định',
  Group: 'Nhóm',
  // Service Management
  'Service Code': 'Mã dịch vụ',
  'Service Name': 'Tên dịch vụ',
  'Short Name': 'Tên viết tắt',
  // Service Type Management
  'Service Type Code': 'Mã loại dịch vụ',
  'Service Type Name': 'Tên loại dịch vụ',
  // Filter Management
  'Filter Name': 'Tên bộ lọc',
  Description: 'Mô tả',

  // Title Table
  'Scheduled Studies': 'Chỉ định chụp',
  'Performed Studies': 'Ca đã chụp',
  Institution: 'Cơ sở y tế',
  'Role Management': 'Quản lý nhóm quyền',
  'Account Management': 'Quản lý tài khoản',
  'Template Management': 'Quản lý mẫu báo cáo',
  'Layout Management': 'Quản lý bố cục',
  'Procedure Management': 'Quản lý dịch vụ',
  'Service Type Management': 'Quản lý loại dịch vụ',
  'Filter Management': 'Quản lý bộ lọc',

  // Button
  Match: 'Ghép',
  'Un-match': 'Huỷ ghép',
  'Create Study': 'Tạo ca chụp',
  'Add Institution': 'Thêm cơ sở',
  'Add Role': 'Thêm nhóm quyền',
  'Add Account': 'Thêm tài khoản',
  'Add Template': 'Thêm mẫu báo cáo',
  'Add Layout': 'Thêm bố cục',
  'Add Service': 'Thêm dịch vụ',
  'Add Service Type': 'Thêm loại dịch vụ',
  'Add Filter': 'Thêm bộ lọc',
  'Upload Logo': 'Tải lên Logo',
  Permissions: 'Quyền',

  // AccountManagement
  Never: 'Không giới hạn',

  // Label
  ...label,

  // Gender
  ...gender,

  // Status
  ...status,
};
