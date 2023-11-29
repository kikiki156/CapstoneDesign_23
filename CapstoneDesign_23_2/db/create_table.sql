CREATE SCHEMA IF NOT EXISTS edulog;


-- 직책 - 직책 이름(담임,전담,특수교사)
CREATE TABLE IF NOT EXISTS edulog.role (
    role_id SERIAL NOT NULL,
    role_name varchar(10) NOT NULL,
    role_created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    role_updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    role_deleted_at timestamp,

    PRIMARY KEY(role_id)
);

--학교 - 학교 이름, 학교 주소(1:1 속성)
CREATE TABLE IF NOT EXISTS edulog.school (
    school_id SERIAL NOT NULL,
    school_name char(20) NOT NULL,
    school_address varchar(255) NOT NULL,
    school_created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    school_updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    school_deleted_at timestamp,

    PRIMARY KEY(school_id)
);

-- 유저 - ID, PW, 닉네임, 직책 테이블, 학교 테이블(N:1)
CREATE TABLE IF NOT EXISTS edulog.user (
    user_id SERIAL NOT NULL,
    user_name varchar(10) NOT NULL,
    user_login_id varchar(20) NOT NULL,
    user_password varchar(255) NOT NULL,
    role_id int NOT NULL,
    school_id int NOT NULL,
    user_created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_deleted_at timestamp,

    PRIMARY KEY(user_id),
    UNIQUE(user_login_id),
    FOREIGN KEY(role_id) REFERENCES edulog.role(role_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(school_id) REFERENCES edulog.school(school_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);


-- 과목 - 과목 이름

CREATE TABLE IF NOT EXISTS edulog.subject (
    subject_id SERIAL NOT NULL,
    subject_name varchar(10) NOT NULL,
    subject_created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    subject_updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    subject_deleted_at timestamp,

    PRIMARY KEY(subject_id)
);


-- 담당 과목 - 유저 테이블, 과목 테이블, 시수
CREATE TABLE IF NOT EXISTS edulog.user_subject (
    user_subject_id SERIAL NOT NULL,
    user_id int NOT NULL,
    subject_id int NOT NULL,
    user_subject_hour int NOT NULL,
    user_subject_created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_subject_updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_subject_deleted_at timestamp,

    PRIMARY KEY(user_subject_id),
    FOREIGN KEY(user_id) REFERENCES edulog.user(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(subject_id) REFERENCES edulog.subject(subject_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);


--일정 - 일정 날짜, 일정 시간, 일정 제목, 일정 내용, 유저id(N:1)
CREATE TABLE IF NOT EXISTS edulog.schedule (
    schedule_id SERIAL NOT NULL,
    schedule_date date NOT NULL,
    schedule_time int NOT NULL,
    schedule_title varchar(255) NOT NULL,
    schedule_classroom varchar(255),
    schedule_content varchar(255) NOT NULL,
    user_id int NOT NULL,
    schedule_created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    schedule_updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    schedule_deleted_at timestamp,

    PRIMARY KEY(schedule_id),
    FOREIGN KEY(user_id) REFERENCES edulog.user(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);


--학사일정 - 학교id + 일정id, 작성자id
CREATE TABLE IF NOT EXISTS edulog.school_schedule (
    school_schedule_id SERIAL NOT NULL,
    school_id int NOT NULL,
    schedule_id int NOT NULL,
    user_id int NOT NULL,
    school_schedule_created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    school_schedule_updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    school_schedule_deleted_at timestamp,

    PRIMARY KEY(school_schedule_id),
    FOREIGN KEY(school_id) REFERENCES edulog.school(school_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(schedule_id) REFERENCES edulog.schedule(schedule_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(user_id) REFERENCES edulog.user(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);


-- 공유일정 - 일정 id, 공유받은 유저 id
CREATE TABLE IF NOT EXISTS edulog.share_schedule (
    share_schedule_id SERIAL NOT NULL,
    schedule_id int NOT NULL,
    user_id int NOT NULL,
    share_schedule_created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    share_schedule_updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    share_schedule_deleted_at timestamp,

    PRIMARY KEY(share_schedule_id),
    FOREIGN KEY(schedule_id) REFERENCES edulog.schedule(schedule_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(user_id) REFERENCES edulog.user(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);


--체크리스트 - 체크리스트 날짜, 체크리스트 내용, 유저id(N:1)
CREATE TABLE IF NOT EXISTS edulog.checklist (
    checklist_id SERIAL NOT NULL,
    checklist_date date NOT NULL,
    checklist_content varchar(255) NOT NULL,
    checklist_complete int NOT NULL DEFAULT 0,
    user_id int NOT NULL,
    checklist_created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    checklist_updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    checklist_deleted_at timestamp,

    PRIMARY KEY(checklist_id),
    FOREIGN KEY(user_id) REFERENCES edulog.user(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);


--메모 - 유저id, 메모내용, 날짜
CREATE TABLE IF NOT EXISTS edulog.memo(
    memo_id SERIAL NOT NULL,
    memo_content varchar(255) NOT NULL,
    memo_date date NOT NULL,
    user_id int NOT NULL,
    memo_created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    memo_updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    memo_deleted_at timestamp,

    PRIMARY KEY(memo_id),
    FOREIGN KEY(user_id) REFERENCES edulog.user(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);


--시간표 - 교시, 요일, 위치, 과목id(N:1), 메모, 유저id(N:1)
CREATE TABLE IF NOT EXISTS edulog.timetable(
    timetable_id SERIAL NOT NULL,
    timetable_time int NOT NULL,
    timetable_day varchar(10) NOT NULL,
    timetable_location varchar(255) NOT NULL,
    subject_id int NOT NULL,
    timetable_memo varchar(255) NOT NULL,
    user_id int NOT NULL,
    timetable_created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    timetable_updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    timetable_deleted_at timestamp,

    PRIMARY KEY(timetable_id),
    FOREIGN KEY(subject_id) REFERENCES edulog.subject(subject_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(user_id) REFERENCES edulog.user(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);

--주간 일정 - 일정 요일, 일정 시간, 일정 내용, 유저id(N:1)
CREATE TABLE IF NOT EXISTS edulog.weekly_schedule(
    weekly_schedule_id SERIAL NOT NULL,
    weekly_schedule_day varchar(10) NOT NULL,
    weekly_schedule_time int NOT NULL,
    weekly_schedule_content varchar(20) NOT NULL,
    user_id int NOT NULL,
    weekly_schedule_created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    weekly_schedule_updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    weekly_schedule_deleted_at timestamp,

    PRIMARY KEY(weekly_schedule_id),
    FOREIGN KEY(user_id) REFERENCES edulog.user(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);