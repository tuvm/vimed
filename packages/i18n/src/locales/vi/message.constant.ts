const error_message = {
  'Something went wrong. Please try again or contact admin for support.':
    'Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ quản trị viên để được hỗ trợ.',
  'You do not have permission. Please try again or contact admin for support.':
    'Bạn không có quyền truy cập. Vui lòng thử lại hoặc liên hệ quản trị viên để được hỗ trợ.',
  'Invalid authorization header': 'Authorization header không hợp lệ',
  'Keys are empty': 'Khóa trống',
  'This user is already part of another institution.':
    'Người dùng này đã là thuộc về một cơ sở khác.',
  'The institution code is already in use.': 'Mã cơ sở đã được sử dụng.',
  'Please upload a file smaller than 1.5MB.':
    'Vui lòng tải lên tệp nhỏ hơn 1,5MB.',
  'Institution ID not found': 'Không tìm thấy mã cơ sở',
  'The role code is already in use.': 'Mã nhóm quyền đã được sử dụng.',
  'Role ID not found': 'Không tìm thấy mã nhóm quyền',
  'Cannot delete default roles': 'Không thể xóa các nhóm quyền mặc định',
  'The role name is already in use.': 'Tên nhóm quyền đã được sử dụng.',
  'The username is already in use.': 'Tên người dùng đã được sử dụng.',
  'The group account name is already in use.':
    'Tên nhóm tài khoản đã được sử dụng.',
  'User not found': 'Không tìm thấy người dùng',
  'Study ID not found': 'Không tìm thấy mã ca chụp',
  'Failed to sync match status to the study list':
    'Không thể đồng bộ trạng thái ghép nối với danh sách ca chụp',
  'The procedure group name is already in use.':
    'Tên nhóm dịch vụ đã được sử dụng.',
  'The procedure code is already in use.': 'Mã dịch vụ đã được sử dụng.',
  'The template report code is already in use.':
    'Mã mẫu báo cáo đã được sử dụng.',
  'Invalid patient ID, please choose the correct Patient ID.':
    'Mã bệnh nhân không hợp lệ, vui lòng chọn mã bệnh nhân đúng.',
  'Order is already in use.': 'Chỉ định đã được sử dụng.',
  'Order ID not found': 'Không tìm thấy mã chỉ định',
  'Order status is matched. Please unmatch it first.':
    'Trạng thái chỉ định đã được ghép nối. Vui lòng hủy ghép nối trước.',
  'Failed to match order with study.':
    'Không thể ghép nối chỉ định với ca chụp.',
  'Failed to unmatch order with study.':
    'Không thể hủy ghép nối chỉ định với ca chụp.',
  'Failed to sync order status.': 'Không thể đồng bộ trạng thái chỉ định.',
  'Visit ID is already in use. Please enter a different value or leave it blank.':
    'Mã lượt khám đã được sử dụng. Vui lòng nhập giá trị khác hoặc để trống.',
  'Order ID is already in use. Please enter a different value or leave it blank.':
    'Mã chỉ định đã được sử dụng. Vui lòng nhập giá trị khác hoặc để trống.',
  'Cannot auto-generate ID. Please try again or contact admin for support.':
    'Không thể tự động tạo mã. Vui lòng thử lại hoặc liên hệ với quản trị viên để được hỗ trợ.',
  'Cannot assign procedures to order. Please enter valid procedures.':
    'Không thể gán dịch vụ cho chỉ định. Vui lòng nhập dịch vụ hợp lệ.',
  'Cannot assign device to order. Please enter a valid device.':
    'Không thể gán thiết bị cho chỉ định. Vui lòng nhập thiết bị hợp lệ.',
  'Invalid patient ID. Please enter a valid patient ID or leave it blank.':
    'Mã bệnh nhân không hợp lệ. Vui lòng nhập mã bệnh nhân hợp lệ hoặc để trống.',
  'Failed to receive data.': 'Không thể nhận dữ liệu.',
  'Institution mismatch. Please select the correct institution.':
    'Cơ sở không phù hợp. Vui lòng chọn cơ sở đúng.',
  "Invalid order status. Please select 'New' or 'Cancel'.":
    "Trạng thái chỉ định không hợp lệ. Vui lòng chọn 'Mới' hoặc 'Hủy'.",
  'Invalid order status.': 'Trạng thái chỉ định không hợp lệ.',
  'Please select a procedure.': 'Vui lòng chọn một dịch vụ.',
  "Cannot delete an order with status 'ARRIVED'.":
    "Không thể xóa chỉ định với trạng thái 'ĐÃ ĐẾN'.",
  'Duplicate request on create/update.': 'Yêu cầu trùng lặp khi tạo/cập nhật.',
  'The layout report name is already in use.':
    'Tên mẫu in báo cáo đã được sử dụng.',
  'Layout ID not found': 'Không tìm thấy mã mẫu in',
  'Layout name not found': 'Không tìm thấy tên mẫu in',
  'Approve all reports before creating a new one.':
    'Phê duyệt tất cả các báo cáo trước khi tạo báo cáo mới.',
  'Report not found': 'Không tìm thấy báo cáo',
  'Invalid report action flow.': 'Luồng thao tác báo cáo không hợp lệ.',
  'Another doctor is reading this report.':
    'Báo cáo này đang được một bác sĩ khác đọc.',
  'Failed to cancel report.': 'Không thể hủy báo cáo.',
  'The device name is already in use.': 'Tên thiết bị đã được sử dụng.',
  'Failed to share study.': 'Không thể chia sẻ ca chụp.',
  'Failed to update shared study.': 'Không thể cập nhật ca chụp chia sẻ.',
  'Cannot delete expired shared study.':
    'Không thể xóa ca chụp chia sẻ đã hết hạn.',
  'Limited study share for this month.':
    'Chia sẻ ca chụp giới hạn trong tháng này.',
  'Invalid institution for sharing study.':
    'Cơ sở không hợp lệ để chia sẻ ca chụp.',
  'Shared study has expired.': 'Chia sẻ ca chụp đã hết hạn.',
  'Invalid access type for sharing study.':
    'Loại truy cập không hợp lệ để chia sẻ ca chụp.',
  'The filter name is already in use.': 'Tên bộ lọc đã được sử dụng.',
  'Filter not found': 'Không tìm thấy bộ lọc',
  'Failed to create CAD rule.': 'Không thể tạo quy tắc CAD.',
  'Failed to update CAD rule.': 'Không thể cập nhật quy tắc CAD.',
  'Failed to delete CAD rule.': 'Không thể xóa quy tắc CAD.',
  'Cannot find CAD rule.': 'Không thể tìm thấy quy tắc CAD.',
  "Cannot update a request marked as 'reading' or 'completed'.":
    "Không thể cập nhật yêu cầu đã được đánh dấu là 'đang đọc' hoặc 'đã hoàn thành'.",
  "Cannot delete a request marked as 'reading' or 'completed'.":
    "Không thể xóa yêu cầu đã được đánh dấu là 'đang đọc' hoặc 'đã hoàn thành'.",
  'Please choose a group account.': 'Vui lòng chọn một nhóm tài khoản.',
  'Please choose an account.': 'Vui lòng chọn một tài khoản.',
  'Cannot delete all data. Please contact support.':
    'Không thể xóa tất cả dữ liệu. Vui lòng liên hệ hỗ trợ.',
  'This order request is invalid.': 'Yêu cầu chỉ định này không hợp lệ.',
  'Cannot create or reset password. Please contact support.':
    'Không thể tạo hoặc đặt lại mật khẩu. Vui lòng liên hệ hỗ trợ.',
  'Cannot create or reset password. Please update the phone number.':
    'Không thể tạo hoặc đặt lại mật khẩu. Vui lòng cập nhật số điện thoại.',
  'Invalid institution ID. Please contact support.':
    'Mã cơ sở không hợp lệ. Vui lòng liên hệ hỗ trợ.',
  'The body part name is already in use.': 'Tên bộ phận đã được sử dụng.',
  'The department code is already in use.': 'Mã khoa đã được sử dụng.',
  'The department name is already in use.': 'Tên khoa đã được sử dụng.',
  'Failed to create print job.': 'Không thể tạo lệnh in.',
  'Recorded annotation not found': 'Không tìm thấy chú thích đã ghi',
  'Failed to update this recorded annotation.':
    'Không thể cập nhật chú thích này.',
  'Failed to create this recorded annotation.': 'Không thể tạo chú thích này.',
  'Failed to retrieve the recorded annotation.':
    'Không thể lấy chú thích đã ghi.',
  'Wrong owner for this recorded annotation.':
    'Chủ sở hữu không đúng cho chú thích này.',
  'Failed to delete recorded annotation.': 'Không thể xóa chú thích đã ghi.',
  'Valid study not found for performance.':
    'Không tìm thấy ca chụp hợp lệ để thực hiện.',
  'App key not found': 'Không tìm thấy mã ứng dụng',
  'The element is already in use.': 'Element đã được sử dụng.',
  'Missing upload action or file name.':
    'Thiếu hành động tải lên hoặc tên tệp.',
  'Invalid request parameters.': 'Tham số yêu cầu không hợp lệ.',
  'Failed to send metadata to S3.': 'Không thể gửi siêu dữ liệu tới S3.',
  'This structure report code has already been used':
    'Mã mẫu báo cáo có cấu trúc này đã được sử dụng',
  'Generated number must equal or greater than zero':
    'Số được tạo phải bằng hoặc lớn hơn không',
  'Require detail label for element type Generated List':
    'Yêu cầu nhãn chi tiết cho loại phần tử Danh sách Được Tạo',
  'A digital signature request already exists. Please cancel the signature process before creating a new report':
    'Yêu cầu chữ ký số đã tồn tại. Vui lòng hủy quá trình ký trước khi tạo báo cáo mới',
  'Fail to create this consultation on MSTeam':
    'Không thể tạo buổi tư vấn này trên MSTeam',
  'Fail to update this consultation on MSTeam':
    'Không thể cập nhật buổi tư vấn này trên MSTeam',
  'Fail to cancel this consultation on MSTeam':
    'Không thể hủy buổi tư vấn này trên MSTeam',
  'Consultation session already exists. Hosting By: Nguyễn Tiến Nam':
    'Buổi tư vấn đã tồn tại. Được tổ chức bởi: Nguyễn Tiến Nam',
  'Consultation session does not exists': 'Buổi tư vấn không tồn tại',
  'Your request cannot be processed because there is already a similar request from another user.':
    'Yêu cầu của bạn không thể được xử lý vì đã có một yêu cầu tương tự từ người dùng khác.',
  'Your request has been submitted and is awaiting confirmation':
    'Yêu cầu của bạn đã được gửi và đang chờ xác nhận',
  'You have been disconnected from the meeting. Attempting to reconnect...':
    'Bạn đã bị ngắt kết nối khỏi cuộc họp. Đang cố gắng kết nối lại...',
  "The host [Host's Name] has been disconnected. Waiting for the host to reconnect...":
    'Người tổ chức [Tên Người Tổ Chức] đã bị ngắt kết nối. Đang chờ người tổ chức kết nối lại...',
  'Require image width for element type Image':
    'Yêu cầu chiều rộng hình ảnh cho loại phần tử Hình ảnh',
  'Require image height for element type Image':
    'Yêu cầu chiều cao hình ảnh cho loại phần tử Hình ảnh',
};
const inline_error_message = {
  'Please fill in this field.': 'Vui lòng điền vào trường này.',
  'Enter in the format: name@example.com':
    'Nhập theo định dạng: name@example.com',
  'Enter at least 10 numbers and allow the character +':
    'Nhập ít nhất 10 số và cho phép ký tự +',
  'Password must be at least 8 characters long':
    'Mật khẩu phải có ít nhất 8 ký tự',
  'The password confirmation does not match': 'Xác nhận mật khẩu không khớp',
  'The password is incorrect': 'Mật khẩu không đúng',
};
const confirmation_dialog = {
  'Are you sure you want to delete the institution?':
    'Bạn có chắc chắn muốn xóa cơ sở này không?',
  'Are you sure you want to delete the role?':
    'Bạn có chắc chắn muốn xóa nhóm quyền này không?',
  'Are you sure you want to delete the user?':
    'Bạn có chắc chắn muốn xóa người dùng này không?',
  'Are you sure you want to delete the group account?':
    'Bạn có chắc chắn muốn xóa nhóm tài khoản này không?',
  'Are you sure you want to unmatch the order?':
    'Bạn có chắc chắn muốn hủy ghép nối chỉ định này không?',
  'Are you sure you want to delete the procedure group?':
    'Bạn có chắc chắn muốn xóa nhóm dịch vụ này không?',
  'Are you sure you want to delete the procedure?':
    'Bạn có chắc chắn muốn xóa dịch vụ này không?',
  'Are you sure you want to delete the template report?':
    'Bạn có chắc chắn muốn xóa mẫu báo cáo này không?',
  'Are you sure you want to delete the order?':
    'Bạn có chắc chắn muốn xóa chỉ định này không?',
  'Are you sure you want to delete the layout report?':
    'Bạn có chắc chắn muốn xóa mẫu in báo cáo này không?',
  'This template will overwrite your current work. Do you want to continue?':
    'Mẫu này sẽ ghi đè công việc hiện tại của bạn. Bạn có muốn tiếp tục không?',
  'Are you sure you want to delete the device?':
    'Bạn có chắc chắn muốn xóa thiết bị này không?',
  'Are you sure you want to delete the shared study?':
    'Bạn có chắc chắn muốn xóa ca chụp đã chia sẻ này không?',
  'Are you sure you want to delete this filter?':
    'Bạn có chắc chắn muốn xóa bộ lọc này không?',
  'Are you sure you want to delete this CAD rule?':
    'Bạn có chắc chắn muốn xóa quy tắc CAD này không?',
  'Are you sure you want to delete this request?':
    'Bạn có chắc chắn muốn xóa yêu cầu này không?',
  'Are you sure you want to delete the patient?':
    'Bạn có chắc chắn muốn xóa bệnh nhân này không?',
  'Are you sure you want to reset the password?':
    'Bạn có chắc chắn muốn đặt lại mật khẩu không?',
  'Are you sure you want to delete the body part?':
    'Bạn có chắc chắn muốn xóa bộ phận này không?',
  'Are you sure you want to delete the department?':
    'Bạn có chắc chắn muốn xóa khoa này không?',
  'Are you sure you want to delete the consultation?':
    'Bạn có chắc chắn muốn xóa cuộc hội chẩn này không?',
  'Are you sure you want to delete the element?':
    'Bạn có chắc chắn muốn xóa element này không?',
  'Are you sure you want to delete the template structure report?':
    'Bạn có chắc chắn muốn xóa báo cáo có cấu trúc này không?',
};
const success_message = {
  'The institution has been created.': 'Cơ sở đã được tạo.',
  'The institution has been updated.': 'Cơ sở đã được cập nhật.',
  'The institution has been deleted.': 'Cơ sở đã bị xóa.',
  'The role has been created.': 'Nhóm quyền đã được tạo.',
  'The role has been updated.': 'Nhóm quyền đã được cập nhật.',
  'The role has been deleted.': 'Nhóm quyền đã bị xóa.',
  'The account has been created.': 'Tài khoản đã được tạo.',
  'The account has been updated.': 'Tài khoản đã được cập nhật.',
  'The account has been deleted.': 'Tài khoản đã bị xóa.',
  'The group account has been created.': 'Nhóm tài khoản đã được tạo.',
  'The group account has been updated.': 'Nhóm tài khoản đã được cập nhật.',
  'The group account has been deleted.': 'Nhóm tài khoản đã bị xóa.',
  'All orders have been matched.': 'Tất cả các chỉ định đã được ghép nối.',
  'All orders have been unmatched.':
    'Tất cả các chỉ định đã được hủy ghép nối.',
  'The procedure group has been created.': 'Nhóm dịch vụ đã được tạo.',
  'The procedure group has been updated.': 'Nhóm dịch vụ đã được cập nhật.',
  'The procedure group has been deleted.': 'Nhóm dịch vụ đã bị xóa.',
  'The procedure has been created.': 'Dịch vụ đã được tạo.',
  'The procedure has been updated.': 'Dịch vụ đã được cập nhật.',
  'The procedure has been deleted.': 'Dịch vụ đã bị xóa.',
  'The template report has been created.': 'Báo cáo mẫu đã được tạo.',
  'The template report has been updated.': 'Báo cáo mẫu đã được cập nhật.',
  'The template report has been deleted.': 'Báo cáo mẫu đã bị xóa.',
  'The order has been created.': 'Chỉ định đã được tạo.',
  'The order has been updated.': 'Chỉ định đã được cập nhật.',
  'The order has been deleted.': 'Chỉ định đã bị xóa.',
  'You can use this patient ID.': 'Bạn có thể sử dụng mã bệnh nhân này.',
  'The order has been received.': 'Chỉ định đã được tiếp nhận.',
  'The patient has been updated.': 'Bệnh nhân đã được cập nhật.',
  'The layout report has been created.': 'Báo cáo mẫu in đã được tạo.',
  'The layout report has been updated.': 'Báo cáo mẫu in đã được cập nhật.',
  'The layout report has been deleted.': 'Báo cáo mẫu in đã bị xóa.',
  'The report has been created.': 'Báo cáo đã được tạo.',
  'The report has been updated.': 'Báo cáo đã được cập nhật.',
  'The report has been deleted.': 'Báo cáo đã bị xóa.',
  'The device has been created.': 'Thiết bị đã được tạo.',
  'The device has been updated.': 'Thiết bị đã được cập nhật.',
  'The device has been deleted.': 'Thiết bị đã bị xóa.',
  'The study has been shared.': 'Ca chụp đã được chia sẻ.',
  'The shared study has been updated.': 'Chia sẻ ca chụp đã được cập nhật.',
  'The shared study has been deleted.': 'Chia sẻ ca chụp đã bị xóa.',
  'The filter has been created.': 'Bộ lọc đã được tạo.',
  'The filter has been updated.': 'Bộ lọc đã được cập nhật.',
  'The filter has been deleted.': 'Bộ lọc đã bị xóa.',
  'The CAD rule has been created.': 'Quy tắc CAD đã được tạo.',
  'The CAD rule has been updated.': 'Quy tắc CAD đã được cập nhật.',
  'The CAD rule has been deleted.': 'Quy tắc CAD đã bị xóa.',
  'The request has been assigned.': 'Yêu cầu đã được chỉ định.',
  'The request has been updated.': 'Yêu cầu đã được cập nhật.',
  'The request has been deleted.': 'Yêu cầu đã bị xóa.',
  'The key image has been created.': 'Key image đã được tạo.',
  'The data has been deleted.': 'Dữ liệu đã bị xóa.',
  'The patient account has been created.': 'Tài khoản bệnh nhân đã được tạo.',
  'The patient account has been updated.':
    'Tài khoản bệnh nhân đã được cập nhật.',
  'The patient account has been deleted.': 'Tài khoản bệnh nhân đã bị xóa.',
  'The body part has been created.': 'Bộ phận đã được tạo.',
  'The body part has been updated.': 'Bộ phận đã được cập nhật.',
  'The body part has been deleted.': 'Bộ phận đã bị xóa.',
  'The department has been created.': 'Khoa đã được tạo.',
  'The department has been updated.': 'Khoa đã được cập nhật.',
  'The department has been deleted.': 'Khoa đã bị xóa.',
  'The print job has been created.': 'Lệnh in đã được tạo.',
  'The element has been created.': 'Emelent đã được tạo.',
  'The element has been updated.': 'Emelent đã được cập nhật.',
  'The element has been deleted.': 'Emelent đã bị xóa.',
  'The template structure report has been created.':
    'Mẫu báo cáo có cấu trúc đã được tạo.',
  'The template structure report has been updated.':
    'Mẫu báo cáo có cấu trúc đã được cập nhật.',
  'The template structure report has been deleted.':
    'Mẫu báo cáo có cấu trúc đã bị xóa.',
  'The resend request has been created': 'Yêu cầu gửi lại đã được tạo',
  'This request has been deleted': 'Yêu cầu này đã được xóa',
  'This request has been created': 'Yêu cầu này đã được tạo',
  'The revocation request has been created': 'Yêu cầu hủy bỏ đã được tạo',
  'This consultation has been created': 'Buổi tư vấn này đã được tạo',
  'This consultation has been created on MSTeam':
    'Buổi tư vấn này đã được tạo trên MSTeam',
  'This consultation has been updated on MSTeam':
    'Buổi tư vấn này đã được cập nhật trên MSTeam',
  'This consultation has been canceled on MSTeam':
    'Buổi tư vấn này đã bị hủy trên MSTeam',
  'This note has been updated': 'Ghi chú này đã được cập nhật',
};

export default {
  ...error_message,
  ...inline_error_message,
  ...confirmation_dialog,
  ...success_message,
};
