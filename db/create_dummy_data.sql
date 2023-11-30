INSERT INTO edulog.school(school_name, school_address) VALUES ('중앙초등학교', '흑석');
INSERT INTO edulog.role(role_name) VALUES ('담임');
INSERT INTO edulog.role(role_name) VALUES ('교과전담');
INSERT INTO edulog.role(role_name) VALUES ('특수교사');
INSERT INTO edulog.subject(subject_name) VALUES ('국어');
INSERT INTO edulog.subject(subject_name) VALUES ('수학');

INSERT INTO edulog."user"(user_name, user_login_id, user_password, role_id, school_id)
VALUES ('test담임', 'teacher', '1234',
(SELECT role_id FROM edulog.role WHERE role_name = '담임'),
(SELECT school_id FROM edulog.school WHERE school_name = '중앙초등학교'));

INSERT INTO edulog."user"(user_name, user_login_id, user_password, role_id, school_id)
VALUES ('test교사', 'teacher2', '1234',
(SELECT role_id FROM edulog.role WHERE role_name = '교과전담'),
(SELECT school_id FROM edulog.school WHERE school_name = '중앙초등학교'));

INSERT INTO edulog.schedule(schedule_date, schedule_time, schedule_title, schedule_content, schedule_classroom, user_id)
VALUES ('2020-01-01', 1, '학사 일정 테스트', '학사일정 테스트 일정 내용', 1-1,
(SELECT user_id FROM edulog."user" WHERE user_login_id = 'teacher'));

INSERT INTO edulog.schedule(schedule_date, schedule_time, schedule_title, schedule_content, schedule_classroom, user_id)
VALUES ('2020-01-01', 2, '테스트 일정', '테스트 일정 내용', 1-2,
(SELECT user_id FROM edulog."user" WHERE user_login_id = 'teacher'));

INSERT INTO edulog.school_schedule(school_id, schedule_id, user_id)
VALUES ((SELECT school_id FROM edulog.school WHERE school_name = '중앙초등학교'),
(SELECT schedule_id FROM edulog.schedule WHERE schedule_title = '학사 일정 테스트'),
(SELECT user_id FROM edulog."user" WHERE user_login_id = 'teacher'));

INSERT INTO edulog.checklist(checklist_date, checklist_content, checklist_complete,user_id)
VALUES ('2020-01-01', '체크리스트 테스트', 0,
(SELECT user_id FROM edulog."user" WHERE user_login_id = 'teacher'));

INSERT INTO edulog.memo(memo_content, memo_date, user_id)
VALUES ('메모 테스트', '2020-01-01',
(SELECT user_id FROM edulog."user" WHERE user_login_id = 'teacher'));

INSERT INTO edulog.timetable(timetable_time, timetable_day, timetable_location, subject_id, timetable_memo, user_id)
VALUES (1, '월', '교실',
(SELECT subject_id FROM edulog.subject WHERE subject_name = '국어'),
'메모',
(SELECT user_id FROM edulog."user" WHERE user_login_id = 'teacher'));

INSERT INTO edulog.share_schedule(schedule_id, user_id)
VALUES ((SELECT schedule_id FROM edulog.schedule WHERE schedule_title = '테스트 일정'),
(SELECT user_id FROM edulog."user" WHERE user_login_id = 'teacher2'));

INSERT INTO edulog.user_subject(user_id, subject_id, user_subject_hour)
VALUES ((SELECT user_id FROM edulog."user" WHERE user_login_id = 'teacher'),
(SELECT subject_id FROM edulog.subject WHERE subject_name = '국어'),
        1);

INSERT INTO edulog.user_subject(user_id, subject_id, user_subject_hour)
VALUES ((SELECT user_id FROM edulog."user" WHERE user_login_id = 'teacher'),
(SELECT subject_id FROM edulog.subject WHERE subject_name = '수학'),
        1);