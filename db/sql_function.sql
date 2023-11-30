--signin
--로그인 하고 유저아이디를 저장하기
SELECT user_id, user_login_id, user_password
FROM edulog.user
WHERE user_login_id = '[User_Login_ID]' AND user_password = '[User_Password]';

--signup
--회원가입할때, 아이디가 겹치는지 검사하기
INSERT INTO edulog.user(user_name, user_login_id, user_password, role_id, school_id)
VALUES ('[User_Name]', '[User_Login_ID]', '[User_Password]', [Role_ID], [School_ID]);

--schedule_daily
-- 과목을 불러오면 해당 테이블의 시수를 줄이고, 과목을 다른것으로 교체 혹은 제거하면 해당 테이블의 시수를 늘린다.
--Replace [User_ID] with the user's ID and [YYYY-MM-DD] with the specific date.
SELECT schedule_time, schedule_subject, schedule_classroom, schedule_content
FROM edulog.schedule
WHERE user_id = 1 AND schedule_date = '[2020-01-01]';

--checklist
--Replace [User_ID] with the user's ID and [YYYY-MM-DD] with the specific date.
SELECT checklist_content, checklist_complete
FROM edulog.checklist
WHERE user_id = 1 AND checklist_date = '[2020-01-01]';

--schedule_monthly
--얘는 할일에서 받아오는 것
SELECT schedule_date, schedule_time, schedule_subject, schedule_content
FROM edulog.schedule
WHERE user_id = [User_ID] AND MONTH(schedule_date) = [Month] AND YEAR(schedule_date) = [Year]
ORDER BY schedule_date, schedule_time;



--setting   시수 설정해야 됨


--setting_class_hour

